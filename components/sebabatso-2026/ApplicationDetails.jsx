"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

const contacts = [
  {
    label: "Sebabatso / YouthConnekt",
    email: "sebabatso.youthconnekt@gov.ls",
    whatsapp: "+266 5388 8365",
  },
  {
    label: "UNDP Lesotho",
    email: "lsprocurement@undp.org",
    whatsapp: "+266 6281 8064",
  },
];

export function ApplicationDetails() {
  return (
    <section id="application" className="relative px-[5%] py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70"
          {...fadeUp}
        >
          Apply Now
        </motion.p>
        <motion.h2
          className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          Your application <br className="md:hidden" />
          <span className="bg-gradient-to-r from-[#F5C454] to-[#E29A2B] bg-clip-text text-transparent">
            starts here
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-white/65"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          Applications for the <strong className="text-white">fourth cohort</strong> are now
          open. Submit your best idea for change before the deadline.
        </motion.p>

        <motion.div
          className="mx-auto mb-12 inline-block rounded-2xl border border-[#F5C454]/20 bg-gradient-to-b from-[#F5C454]/10 to-[#E29A2B]/5 px-10 py-6"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5C454]/70">
            Deadline
          </p>
          <p className="text-3xl font-bold text-white md:text-4xl">
            Friday, 31 July 2026
          </p>
        </motion.div>

        <motion.a
          href="https://go.undp.org/THv"
          target="_blank"
          rel="noreferrer"
          className="mb-16 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F5C454] to-[#E29A2B] px-8 py-3 text-base font-semibold text-[#0B1A2F] shadow-[0_0_32px_-4px_rgba(245,196,84,0.4)] transition-all hover:shadow-[0_0_48px_-4px_rgba(245,196,84,0.7)]"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
          Open Application Form
        </motion.a>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          {contacts.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 text-left backdrop-blur-sm"
            >
              <p className="mb-3 text-sm font-semibold text-white">{c.label}</p>
              <div className="space-y-2 text-sm text-white/60">
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#F5C454]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {c.email}
                </a>
                <a
                  href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#F5C454]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
                    <path d="M16.75 13.96c.25.13.47.26.69.39.34.2.68.42.99.65.3.22.57.47.79.76.28.37.42.82.41 1.28-.01.68-.31 1.35-.85 1.82-.31.27-.65.49-1.02.67-.49.24-1 .37-1.53.39-.67.02-1.34-.16-1.92-.51-.35-.2-.67-.45-.96-.72-.41-.39-.79-.81-1.14-1.25-.36-.44-.69-.9-.99-1.38-.55-.88-1.03-1.8-1.46-2.76-.49-1.11-.87-2.26-1.16-3.43-.11-.46-.18-.93-.2-1.4-.01-.44.08-.87.27-1.27.25-.47.62-.84 1.07-1.1.22-.13.46-.21.72-.25.28-.05.56-.02.83.06.19.06.36.17.48.34.22.32.44.63.68.93.27.34.55.67.83 1.01.22.27.33.61.31.96-.01.22-.07.43-.18.62-.13.22-.29.42-.47.6-.12.12-.23.25-.33.39-.11.17-.16.36-.14.56.02.2.08.39.17.56.25.47.55.92.89 1.33.28.34.59.66.93.94.3.25.62.49.97.68.16.09.33.16.5.22.13.05.27.04.39-.02.15-.07.28-.18.38-.31.17-.22.3-.47.4-.73.07-.17.15-.33.26-.47.13-.17.3-.3.5-.37.16-.06.33-.08.5-.06.19.02.37.08.53.18z" />
                  </svg>
                  {c.whatsapp}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
