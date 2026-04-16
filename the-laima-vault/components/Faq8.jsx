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
            Everything you need to know about security and how we protect your
            data
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How is my data protected?
            </h2>
            <p>
              Laima complies with POPIA in South Africa and follows Basotho data
              protection standards. Every conversation and transaction is
              encrypted within WhatsApp's secure infrastructure. Your location
              data is only shared with the Captain assigned to your order, and
              it's deleted once delivery is complete.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I track my order in real time?
            </h2>
            <p>
              Yes. Your Captain shares their location through WhatsApp as they
              approach. You'll see landmarks near Pisto Ground or the Basotho
              Hat so you know exactly when they're close. No guessing, no
              waiting in the dark.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What happens if something goes wrong?
            </h2>
            <p>
              The Unbreakable Record logs every message and agreement in your
              chat. If there's a dispute, we have the proof. Our refund policy
              covers lost or damaged items within 48 hours of delivery. Contact
              us immediately and we'll make it right.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my payment information safe?
            </h2>
            <p>
              We use M-Pesa and EcoCash for payments, both trusted systems in
              the Kingdom of Lesotho and South Africa. Your payment details
              never touch our servers. The transaction happens directly between
              you and your payment provider.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Who can see my chat history?
            </h2>
            <p>
              Only you and the Captain or business partner you're working with.
              Laima doesn't read your messages. WhatsApp's end-to-end encryption
              means only the sender and receiver can see what's written. Your
              privacy is the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
