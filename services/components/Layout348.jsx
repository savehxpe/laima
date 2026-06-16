"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout348() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E29A2B] md:mb-4">
              Speed
            </p>
            <h2 className="mb-5 text-5xl font-bold tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
              Delivery in under an hour
            </h2>
            <p className="text-base text-[#0B1A2F]/75 md:text-md">
              Laima Stars know Maseru and Sandton like their own streets. Your
              order moves fast because we don't waste time on confusion — every
              captain is routed in real time, every handover proven on
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="secondary"
                className="rounded-full border-[#0B1A2F] px-6 text-sm font-semibold text-[#0B1A2F] hover:bg-[#0B1A2F] hover:text-white"
              >
                Discover
              </Button>
              <Button
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="font-semibold text-[#0B1A2F]"
              >
                Learn
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(11,26,47,0.35)]">
              <img
                src="/images/star-rider-fast.webp"
                alt="Laima Star captain delivering across Maseru"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0B1A2F]/35 via-transparent to-[#F5C454]/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
