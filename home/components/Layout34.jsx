"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="/laima-star.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Frictionless trade
                  </h1>
                  <p>
                    One message. One location pin. One payment. No forms, no
                    delays, no confusion.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="/laima-star.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Green packaging
                  </h1>
                  <p>
                    Every delivery wrapped in respect for the land and the
                    people who live here.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="/laima-star.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Expert reliability
                  </h1>
                  <p>
                    E re lai. We keep our word. Every time. That's not a
                    promise—it's how we work.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Arrow
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/captain-portrait.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
