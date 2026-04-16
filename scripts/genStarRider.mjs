import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const KEY = process.env.KIE_API_KEY;
const ENDPOINT = "https://api.kie.ai/api/v1/jobs/createTask";
const POLL = "https://api.kie.ai/api/v1/jobs/recordInfo";

const job = {
  name: "star-rider-fast",
  ratio: "4:3",
  prompt: `Editorial cinematic photograph of a confident young Basotho motorbike rider in branded high-visibility yellow Laima reflector vest and matte black DOT helmet, mid-action delivery on a Maseru avenue at golden hour, slight motion blur on background traffic, sharp focus on rider, Sandton-Maseru urban energy, deep teal-navy and warm amber palette, magazine-grade composition, photoreal, shallow depth of field. No text, no watermarks, no logos.`,
};

async function post(url, body) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify(body),
  });
  return r.json();
}
async function get(url) {
  const r = await fetch(url, { headers: { Authorization: `Bearer ${KEY}` } });
  return r.json();
}
async function download(url, path) {
  const r = await fetch(url);
  const buf = Buffer.from(await r.arrayBuffer());
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, buf);
}

console.log(`[${job.name}] start`);
const create = await post(ENDPOINT, {
  model: "nano-banana-2",
  input: { prompt: job.prompt, aspect_ratio: job.ratio, resolution: "2K", output_format: "jpg" },
});
if (create.code !== 200) { console.error("create fail", create); process.exit(1); }
const taskId = create.data.taskId;
for (let i = 0; i < 90; i++) {
  await new Promise((r) => setTimeout(r, 4000));
  const info = await get(`${POLL}?taskId=${taskId}`);
  const state = info?.data?.state;
  if (state === "success") {
    const result = JSON.parse(info.data.resultJson);
    const out = `public/images/${job.name}.jpg`;
    await download(result.resultUrls[0], out);
    console.log(`[${job.name}] ✓ ${out}`);
    process.exit(0);
  }
  if (state === "fail") { console.error("fail", info.data.failMsg); process.exit(1); }
  if (i % 5 === 0) console.log(`[${job.name}] ${state}…`);
}
