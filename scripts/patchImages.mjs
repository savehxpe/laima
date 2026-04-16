import { readFile, writeFile } from "node:fs/promises";

const PLACEHOLDER = /https:\/\/d22po4pjz3o32e\.cloudfront\.net\/placeholder-image(?:-\d+|-landscape)?\.svg/g;

const map = {
  "home/components/Header83.jsx": [
    "hero-mosaic-1","hero-mosaic-2","hero-mosaic-3","hero-mosaic-4","hero-mosaic-5",
    "hero-mosaic-6","hero-mosaic-7","hero-mosaic-8","hero-mosaic-9",
  ],
  "home/components/Layout34.jsx": ["captain-portrait"],
  "home/components/Layout239.jsx": ["whatsapp-phone","mountain-route","training-session"],
  "home/components/Testimonial3.jsx": ["captain-portrait","hero-mosaic-1","hero-mosaic-7"],
  "home/components/Cta31.jsx": ["hero-wide"],
  "home/components/Gallery5.jsx": [
    "mountain-route","hero-mosaic-4","training-session",
    "hero-mosaic-3","hero-mosaic-7","hero-mosaic-8",
  ],

  "services/components/Header65.jsx": ["hero-wide"],
  "services/components/Layout237.jsx": ["delivery-handoff","mountain-route","whatsapp-phone","cross-border"],
  "services/components/Layout348.jsx": [
    "whatsapp-phone","delivery-handoff","mountain-route","bicycle-captain",
    "whatsapp-phone","delivery-handoff","mountain-route","bicycle-captain",
  ],
  "services/components/Layout420.jsx": ["whatsapp-phone","captain-portrait","mountain-route","earnings-dashboard"],
  "services/components/Cta31.jsx": ["hero-wide"],
  "services/components/Gallery5.jsx": [
    "mountain-route","training-session","hero-mosaic-4",
    "hero-mosaic-7","bicycle-captain","cross-border",
  ],

  "own-your-route/components/Header65.jsx": ["training-session"],
  "own-your-route/components/Layout419.jsx": [
    "captain-portrait","hero-mosaic-6","training-session","earnings-dashboard",
  ],
  "own-your-route/components/Cta31.jsx": ["hero-wide"],
  "own-your-route/components/Contact9.jsx": ["customer-tracking"],

  "the-laima-vault/components/Header65.jsx": ["earnings-dashboard"],
  "the-laima-vault/components/Layout22.jsx": ["earnings-dashboard"],
  "the-laima-vault/components/Cta31.jsx": ["hero-wide"],
  "the-laima-vault/components/Testimonial3.jsx": ["captain-portrait","hero-mosaic-1","hero-mosaic-5"],

  "whatsapp-first/components/Header65.jsx": ["whatsapp-phone"],
  "whatsapp-first/components/Layout22.jsx": ["whatsapp-phone"],
  "whatsapp-first/components/Layout239.jsx": ["customer-tracking","whatsapp-phone","hero-mosaic-9"],
  "whatsapp-first/components/Layout254.jsx": ["customer-tracking"],
  "whatsapp-first/components/Layout502.jsx": ["hero-mosaic-2","customer-tracking","whatsapp-phone"],
  "whatsapp-first/components/Cta31.jsx": ["hero-wide"],
};

for (const [path, names] of Object.entries(map)) {
  let src = await readFile(path, "utf8");
  let i = 0;
  src = src.replace(PLACEHOLDER, () => {
    const name = names[Math.min(i, names.length - 1)];
    i++;
    return `/images/${name}.jpg`;
  });
  await writeFile(path, src);
  console.log(`✓ ${path} (${i})`);
}
console.log("done");
