"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about ordering through WhatsApp.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do I need to download anything?
            </h2>
            <p>
              No. Open WhatsApp on your phone and start a chat with Laima.
              There's no app to install, no account to create, and no friction
              between you and what you need. Messaging is all you have.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I share my location?
            </h2>
            <p>
              Send us a landmark you know. Pisto Ground. The Basotho Hat. A
              street corner in Sandton. We navigate by the places that matter to
              you, not by coordinates that mean nothing.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Which payment methods are supported?
            </h2>
            <p>
              M-Pesa and EcoCash work here. Both are fast, both are secure, and
              both move money the way you move through the Kingdom. No credit
              cards required.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my data secure?
            </h2>
            <p>
              Your record stays unbreakable. We follow POPIA compliance and
              encrypt everything that matters. Your trust is the foundation we
              build on.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What can I order through Laima?
            </h2>
            <p>
              Food, packages, errands, and professional trade assistance.
              Whatever moves in Maseru or Sandton, Laima moves it. Start a chat
              and see what's available near you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
