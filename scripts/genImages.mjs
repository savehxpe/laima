import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const KEY = process.env.KIE_API_KEY;
if (!KEY) throw new Error("KIE_API_KEY missing");

const OUT = "public/images";
const ENDPOINT = "https://api.kie.ai/api/v1/jobs/createTask";
const POLL = "https://api.kie.ai/api/v1/jobs/recordInfo";

const MOOD = `Editorial photography, Lesotho Mountain Kingdom, Basotho people, golden hour cinematic light, deep teal-navy and warm amber palette, Laima brand (sesotho word meaning "shining of stars"). High detail, photoreal, magazine-grade composition, sharp focus, natural skin tones, dignified portrayal of African gig-economy workers. No text, no watermarks, no logos.`;

const jobs = [
  { name: "logo", ratio: "1:1", prompt: `Minimalist vector-style brand mark for "Laima" — a stylized 5-point star fused with a swift motorbike silhouette, single line geometric, gold #F5C454 on solid deep navy #0B1A2F background, balanced negative space, clean modern fintech aesthetic. Centered, generous padding, no text.` },
  { name: "hero-mosaic-1", ratio: "1:1", prompt: `${MOOD} Confident young Basotho motorbike captain in branded high-visibility yellow reflector vest and DOT helmet, leaning on his motorbike on a Maseru street at golden hour, slight low angle, shallow depth of field.` },
  { name: "hero-mosaic-2", ratio: "1:1", prompt: `${MOOD} Close-up Basotho hands holding a smartphone showing a WhatsApp delivery chat interface in Sesotho, warm window light, blurred background of an African home interior.` },
  { name: "hero-mosaic-3", ratio: "1:1", prompt: `${MOOD} Wide aerial shot of a single motorbike rider crossing a winding mountain pass in Lesotho, dramatic Maluti mountains, soft mist, sense of speed and freedom.` },
  { name: "hero-mosaic-4", ratio: "1:1", prompt: `${MOOD} Bicycle delivery captain weaving through a vibrant Maseru market street, painted shopfronts, motion blur on background pedestrians, captain in focus wearing yellow Laima vest.` },
  { name: "hero-mosaic-5", ratio: "1:1", prompt: `${MOOD} Smiling Basotho woman customer receiving a small parcel from a captain at her doorstep, warm doormat porch light, both wearing modest contemporary clothing, mutual respect.` },
  { name: "hero-mosaic-6", ratio: "1:1", prompt: `${MOOD} Top-down flatlay of a Laima starter kit on dark wood: yellow reflector vest, matte black DOT helmet, waterproof thermal delivery box, Sesotho-language onboarding card, neatly arranged.` },
  { name: "hero-mosaic-7", ratio: "1:1", prompt: `${MOOD} Group of five proud Basotho captains in matching yellow vests standing in formation at sunrise, Maluti mountains in background, hopeful documentary tone.` },
  { name: "hero-mosaic-8", ratio: "1:1", prompt: `${MOOD} Long-exposure night shot of a motorbike streak of light through Maseru, vivid star field overhead, the streak forms a soft star trail metaphor for Laima.` },
  { name: "hero-mosaic-9", ratio: "1:1", prompt: `${MOOD} Macro of a Basotho merchant accepting an M-Pesa mobile money transfer on a feature phone, hand details, warm market stall background.` },
  { name: "hero-wide", ratio: "16:9", prompt: `${MOOD} Cinematic hero — silhouetted Basotho motorbike captain riding through Maluti mountain pass at first light, vast sky brimming with fading stars, warm rim light, subtle lens flare, sense of purpose.` },
  { name: "captain-portrait", ratio: "4:3", prompt: `${MOOD} Half-body editorial portrait of a Basotho motorbike captain in yellow Laima vest, looking directly at camera, soft natural light, blurred Maseru cityscape background, dignified and aspirational.` },
  { name: "whatsapp-phone", ratio: "4:3", prompt: `${MOOD} Hand holding a smartphone showing a WhatsApp Business chat with delivery options in Sesotho and English, "Romella thomello" button visible, clean UI mock, café table background.` },
  { name: "training-session", ratio: "16:9", prompt: `${MOOD} Group of young Basotho trainees in Laima vests at an outdoor safety training, instructor pointing to a map, motorbikes in row behind, Lesotho hillside backdrop.` },
  { name: "delivery-handoff", ratio: "4:3", prompt: `${MOOD} Captain handing a wrapped parcel to a smiling Basotho customer at a residential door, both glance at the phone for proof-of-delivery photo, evening warm light.` },
  { name: "mountain-route", ratio: "16:9", prompt: `${MOOD} Sweeping aerial of Lesotho's mountain switchback road, single small motorbike mid-frame for scale, deep blue-green valleys, painterly clouds.` },
  { name: "earnings-dashboard", ratio: "4:3", prompt: `${MOOD} Captain seated on a bench reviewing earnings on a phone screen showing M-Pesa balance and weekly trip summary, satisfied expression, sunset behind.` },
  { name: "bicycle-captain", ratio: "4:3", prompt: `${MOOD} Teenage Basotho bicycle captain with a Laima delivery bag, yellow reflector vest, navigating a tight township alley, golden hour, hopeful.` },
  { name: "cross-border", ratio: "16:9", prompt: `${MOOD} Laima motorbike approaching the Maseru Bridge border post into South Africa, official signage abstracted, dawn light, sense of regional ambition.` },
  { name: "customer-tracking", ratio: "1:1", prompt: `${MOOD} Overhead of a customer's phone showing a live WhatsApp map with a moving captain pin on Maseru streets, hand wrapped around a coffee cup, cozy morning.` },
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

async function generate(job) {
  console.log(`[${job.name}] start`);
  const create = await post(ENDPOINT, {
    model: "nano-banana-2",
    input: {
      prompt: job.prompt,
      aspect_ratio: job.ratio,
      resolution: "2K",
      output_format: "jpg",
    },
  });
  if (create.code !== 200) {
    console.error(`[${job.name}] create fail`, create);
    return null;
  }
  const taskId = create.data.taskId;
  for (let i = 0; i < 90; i++) {
    await new Promise((r) => setTimeout(r, 4000));
    const info = await get(`${POLL}?taskId=${taskId}`);
    const state = info?.data?.state;
    if (state === "success") {
      const result = JSON.parse(info.data.resultJson);
      const imgUrl = result.resultUrls?.[0];
      if (!imgUrl) { console.error(`[${job.name}] no url`, info); return null; }
      const out = `${OUT}/${job.name}.jpg`;
      await download(imgUrl, out);
      console.log(`[${job.name}] ✓ ${out}`);
      return out;
    }
    if (state === "fail") {
      console.error(`[${job.name}] fail`, info.data.failMsg);
      return null;
    }
    if (i % 5 === 0) console.log(`[${job.name}] ${state}…`);
  }
  console.error(`[${job.name}] timeout`);
  return null;
}

const results = await Promise.all(jobs.map((j) => generate(j)));
console.log("done", results.filter(Boolean).length, "/", jobs.length);
