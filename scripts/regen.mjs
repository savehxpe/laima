import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const KEY = process.env.KIE_API_KEY;
const ENDPOINT = "https://api.kie.ai/api/v1/jobs/createTask";
const POLL = "https://api.kie.ai/api/v1/jobs/recordInfo";

const jobs = [
  {
    name: "hero-mosaic-3",
    ratio: "1:1",
    prompt: `Sweeping cinematic landscape photo of a winding mountain pass road in Lesotho, dramatic Maluti mountains under soft mist, golden hour, painterly clouds, no people, no text, magazine quality, deep teal-navy and warm amber palette.`,
  },
  {
    name: "cross-border",
    ratio: "16:9",
    prompt: `Editorial photograph of a single yellow motorbike on a long open mountain highway at sunrise in Southern Africa, Maluti mountain range fading into distance, sense of journey and regional travel, no people, no text, no signs, warm light, magazine grade.`,
  },
];

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

async function gen(job) {
  console.log(`[${job.name}] start`);
  const create = await post(ENDPOINT, {
    model: "nano-banana-2",
    input: { prompt: job.prompt, aspect_ratio: job.ratio, resolution: "2K", output_format: "jpg" },
  });
  if (create.code !== 200) { console.error("create fail", create); return; }
  const taskId = create.data.taskId;
  for (let i = 0; i < 90; i++) {
    await new Promise((r) => setTimeout(r, 4000));
    const info = await get(`${POLL}?taskId=${taskId}`);
    const state = info?.data?.state;
    if (state === "success") {
      const result = JSON.parse(info.data.resultJson);
      const out = `public/images/${job.name}.jpg`;
      await download(result.resultUrls[0], out);
      console.log(`[${job.name}] ✓`);
      return;
    }
    if (state === "fail") { console.error(`[${job.name}] fail`, info.data.failMsg); return; }
  }
}

await Promise.all(jobs.map(gen));
