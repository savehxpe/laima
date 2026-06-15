"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

const blocks = [
  {
    label: "Problem",
    title: "Logistics friction in the Mountain Kingdom",
    body: "Lesotho's rugged terrain and informal economy create massive delivery friction. Most Basotho lack delivery addresses, bank cards, or access to courier services. Existing solutions ignore the 70%+ of the population using WhatsApp as their primary digital tool.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    label: "Solution",
    title: "WhatsApp-first logistics layer",
    body: "Laima is a hyperlocal delivery ecosystem built entirely on WhatsApp — no app download required. Customers message a parcel, we match it to a nearby captain on a motorbike, and the delivery happens in hours, not days. Integrated with M-Pesa and EcoCash for seamless mobile-money payments.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    label: "Market Fit",
    title: "Product–market resonance, not force-fit",
    body: "98% WhatsApp penetration in Lesotho. 70% unbanked but mobile-money active. 80% of economic activity is informal same-day trade. Laima meets Basotho where they already are — WhatsApp — and layers a professional logistics backbone underneath the informal economy.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
      </svg>
    ),
  },
  {
    label: "Impact",
    title: "Economic inclusion at scale",
    body: "Every Laima delivery creates income for a local captain — typically a young person with a motorbike and smartphone. We are building a new class of micro-entrepreneurs across all ten districts, connecting rural sellers to urban buyers, and proving that world-class logistics does not require world-class infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export function ShowcaseSection() {
  return (
    <section
      id="innovation"
      className="relative px-[5%] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div className="text-center" {...fadeUp}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70">
            Our Innovation
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Laima
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            A WhatsApp-first hyperlocal delivery ecosystem purpose-built for the
            Mountain Kingdom — integrating local mobile money and regional
            transport networks to connect every Basotho to what matters.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all hover:border-[#F5C454]/30 hover:bg-white/[0.07]"
              {...fadeUp}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1 * i,
              }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5C454]/20 to-[#E29A2B]/10 text-[#F5C454]">
                {block.icon}
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5C454]/60">
                {block.label}
              </p>
              <h3 className="mb-2 text-lg font-bold text-white">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
