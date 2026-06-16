"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout254() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Timeline</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              From message to delivery
            </h2>
            <p className="md:text-md">
              Watch your order move through each stage. Transparency at every
              step, from chat to your door.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="/laima-star.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Message sent
              </h3>
              <p>
                Your order enters the system instantly. No waiting, no
                confirmation delays.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="/laima-star.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Captain assigned
              </h3>
              <p>
                A Green Rider accepts your order and heads toward the landmark
                you named.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/customer-tracking.webp"
              alt="Relume placeholder image"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="/laima-star.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                In motion
              </h3>
              <p>
                Real-time updates keep you informed. You know where your order
                is at every moment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="/laima-star.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Delivered
              </h3>
              <p>
                Your order arrives at the landmark. Confirmation complete.
                Service finished right.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Track</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Arrow
          </Button>
        </div>
      </div>
    </section>
  );
}
