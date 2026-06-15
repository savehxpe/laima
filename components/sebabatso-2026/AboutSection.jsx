"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

export function AboutSection() {
  return (
    <section id="about" className="relative px-[5%] py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70"
          {...fadeUp}
        >
          The Prime Minister&apos;s Vanguard Initiative
        </motion.p>
        <motion.h2
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          Sebabatso &amp;<br className="md:hidden" />{" "}
          <span className="bg-gradient-to-r from-[#F5C454] to-[#E29A2B] bg-clip-text text-transparent">
            STEAM 2026
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          We are seeking passionate young entrepreneurs, innovators, and
          changemakers to join the fourth cohort. Whether you are working in
          mining, agriculture, tech, health, tourism, or any other sector that
          excites you — we want to hear your creative solutions to
          Lesotho&apos;s biggest challenges.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-3"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          {[
            {
              number: "16+",
              label: "STEAM (Innovators)",
              sub: "Age requirement",
            },
            {
              number: "15–35",
              label: "Sebabatso (Entrepreneurs)",
              sub: "Age requirement",
            },
            {
              number: "10",
              label: "Districts",
              sub: "All across Lesotho",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-sm transition-colors hover:border-[#F5C454]/30"
            >
              <p className="text-3xl font-bold text-[#F5C454] md:text-4xl">
                {item.number}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/50">{item.sub}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-white/50"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          We strongly encourage you to head to{" "}
          <a
            href="https://go.undp.org/THv"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#F5C454] underline underline-offset-4 transition-colors hover:text-[#FFD675]"
          >
            go.undp.org/THv
          </a>{" "}
          to learn about the programme before applying.
        </motion.p>
      </div>
    </section>
  );
}
