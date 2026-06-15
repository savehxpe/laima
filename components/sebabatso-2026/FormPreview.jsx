"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

const fields = [
  {
    q: "How will you fill out this form?",
    hint: "By Myself / With Enumerator Assistance / Assisted during roadshows",
  },
  {
    q: "Have you or your company entered Sebabatso before and won a prize?",
    hint: "Yes / No",
  },
  {
    q: "Are you an Innovator or Entrepreneur?",
    hint: "Innovator (Moqapi) / Entrepreneur (Rakhoebo)",
  },
];

export function FormPreview() {
  return (
    <section className="relative px-[5%] py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70"
          {...fadeUp}
        >
          Application Form
        </motion.p>
        <motion.h2
          className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          What to expect
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-white/65"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          The form is straightforward. Here is a preview of the key questions to
          help you prepare.
        </motion.p>

        <div className="space-y-4 text-left">
          {fields.map((field, i) => (
            <motion.div
              key={field.q}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm transition-all hover:border-[#F5C454]/20"
              {...fadeUp}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2 + 0.1 * i,
              }}
            >
              <p className="text-sm font-medium text-white">{field.q}</p>
              <p className="mt-1 text-xs text-white/45">{field.hint}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-sm text-white/45"
          {...fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.5,
          }}
        >
          This is a preview only. Complete the full application on the official
          form.
        </motion.p>
      </div>
    </section>
  );
}
