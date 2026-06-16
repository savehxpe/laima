"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout420() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Process</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Four steps from message to delivery
                </h2>
                <p className="md:text-md">
                  Start a chat on WhatsApp, browse what we carry, pin your
                  location near a landmark you know, and pay through M-Pesa or
                  EcoCash. The system works because it meets you where you
                  already are.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="Details"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Message us
              </h3>
              <p>
                Open WhatsApp and find Laima in your contacts. No download. No
                registration forms. Just a conversation.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/whatsapp-phone.webp"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Message us
              </h3>
              <p>
                Open WhatsApp and find Laima in your contacts. No download. No
                registration forms. Just a conversation.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/captain-portrait.webp"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Message us
              </h3>
              <p>
                Open WhatsApp and find Laima in your contacts. No download. No
                registration forms. Just a conversation.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/mountain-route.webp"
                className="size-full object-cover"
                alt="Relume placeholder image 3"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-text-alternative">
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Message us
              </h3>
              <p>
                Open WhatsApp and find Laima in your contacts. No download. No
                registration forms. Just a conversation.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/earnings-dashboard.webp"
                className="size-full object-cover"
                alt="Relume placeholder image 4"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
