"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Kit</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Everything you need to start riding
                </h2>
                <p className="md:text-md">
                  We outfit every captain with the tools that matter. Branded
                  gear with vertical pinstripes, a smartphone mount that holds
                  steady on mountain roads, safety equipment that keeps you
                  visible, and access to our private support group where
                  captains share routes and wisdom.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Order" variant="secondary">
                    Order
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
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/captain-portrait.jpg"
                  alt="Relume placeholder image 1"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Branded gear
              </h3>
              <p>
                Vertical pinstripes honor Seanamarena tradition while you work.
                Every piece carries the mark of a captain.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/hero-mosaic-6.jpg"
                  alt="Relume placeholder image 2"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Branded gear
              </h3>
              <p>
                Vertical pinstripes honor Seanamarena tradition while you work.
                Every piece carries the mark of a captain.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/training-session.jpg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Branded gear
              </h3>
              <p>
                Vertical pinstripes honor Seanamarena tradition while you work.
                Every piece carries the mark of a captain.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/earnings-dashboard.jpg"
                  alt="Relume placeholder image 4"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Branded gear
              </h3>
              <p>
                Vertical pinstripes honor Seanamarena tradition while you work.
                Every piece carries the mark of a captain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
