"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">
          Shine
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          WhatsApp first
        </h1>
        <p className="text-text-alternative md:text-md">
          Trade without friction. No app. No waiting. Just messaging that moves.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Start">Start</Button>
          <Button title="Learn" variant="secondary-alt">
            Learn
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/whatsapp-phone.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
