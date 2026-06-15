"use client";

import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

export function DisclaimerSection() {
  return (
    <section className="relative px-[5%] py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70"
          {...fadeUp}
        >
          Disclaimer (Temoso)
        </motion.p>
        <motion.h2
          className="mb-12 text-4xl font-bold text-white md:text-5xl"
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          Important notes
        </motion.h2>

        <div className="grid gap-6 text-left md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-sm"
            {...fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          >
            <p className="mb-3 text-sm leading-relaxed text-white/70">
              Please note that the questions and information provided regarding
              gender, disability, education, location, marital status, etc., has
              no influence on your application results. It is purely for analysis
              and assisting in tailoring our bootcamps and conference.
            </p>
            <p className="text-xs leading-relaxed italic text-white/45">
              Ka kopo hlokomela hore tlhahisoleseling e ka tlase ha e ame
              liphetho tsa kopo ea hau. E sebelisoa feela bakeng sa tlhahlobo le
              ho thusa ho hlophisa bootcamp le kopano ea rona.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 backdrop-blur-sm"
            {...fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          >
            <p className="mb-3 text-sm leading-relaxed text-white/70">
              Please note that the individual who completes the application will
              be the main point of contact and/or considered the team
              representative. This cannot be changed after submitting the
              application.
            </p>
            <p className="text-xs leading-relaxed italic text-white/45">
              Ka kopo hlokomela hore motho ea tlatsang kopo e tla ba eena motho
              ea ka sehloohong eo ho tla buisanoa le eena le/kapa a nkoe e le
              moemeli oa sehlopha. Sena se ke ke sa fetoloa kamora hore kopo e
              romeloe.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
