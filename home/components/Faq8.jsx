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
            Everything you need to know about ordering, coverage, and how Laima
            works.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Support" variant="secondary">
              Support
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I start ordering?
            </h2>
            <p>
              Save Laima's WhatsApp number, send a message, and browse the
              catalog. Pin your location, choose what you need, and pay through
              M-Pesa or EcoCash. That's it.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What areas do you cover?
            </h2>
            <p>
              We operate across Maseru and Sandton. Our Captains use
              landmark-based navigation, so street addresses aren't necessary.
              If you can describe where you are, we can find you.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Why no app?
            </h2>
            <p>
              WhatsApp is already on your phone. No download, no new login, no
              friction. You chat with us the same way you chat with anyone else.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast is delivery?
            </h2>
            <p>
              Most deliveries arrive within 45 minutes. Same-day service is
              standard. Speed depends on what you're ordering and where you are,
              but we don't waste time.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my data safe?
            </h2>
            <p>
              Yes. We comply with POPIA and the ECT Act. Your location, payment,
              and order history stay between you and Laima. We keep our word
              about privacy the same way we keep it about delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
