"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout502() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Choose</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What you need
          </h1>
          <p className="md:text-md">
            The catalog arrives in your chat. Food, packages, errands—everything
            available near you, organized and ready.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Browse" variant="secondary">
              Browse
            </Button>
            <Button
              title="Arrow"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Arrow
            </Button>
          </div>
        </div>
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Food
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Logistics
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="border-0 border-b-[1.5px] border-border-alternative px-0 py-2 duration-0 data-[state=active]:border-b-[1.5px] data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
            >
              Errands
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="/images/hero-mosaic-2.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Taste</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Papa le Moroho delivered fresh
                </h2>
                <p>
                  Local vegetables and staples arrive in eco-friendly packaging.
                  The food you know, the way you want it.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Order" variant="secondary">
                    Order
                  </Button>
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="/images/customer-tracking.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Taste</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Papa le Moroho delivered fresh
                </h2>
                <p>
                  Local vegetables and staples arrive in eco-friendly packaging.
                  The food you know, the way you want it.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Order" variant="secondary">
                    Order
                  </Button>
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="/images/whatsapp-phone.jpg"
                  className="w-full object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Taste</p>
                <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                  Papa le Moroho delivered fresh
                </h2>
                <p>
                  Local vegetables and staples arrive in eco-friendly packaging.
                  The food you know, the way you want it.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Order" variant="secondary">
                    Order
                  </Button>
                  <Button
                    title="Arrow"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Arrow
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
