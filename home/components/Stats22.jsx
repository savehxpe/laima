"use client";

import React from "react";

export function Stats22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Numbers</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Built on trust
          </h2>
          <p className="md:text-md">
            These are the metrics that matter to traders and businesses across
            the Kingdom.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                98%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Open rate
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                45min
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Average delivery
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                2,847
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Active traders
              </h3>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src="/images/hero-wide.jpg"
              alt="Laima delivery captain in action across Maseru"
              className="aspect-[3/2] size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}