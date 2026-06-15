"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/whatsapp-first", label: "WhatsApp First" },
  { href: "/own-your-route", label: "Own Your Route" },
  { href: "/the-laima-vault", label: "The Laima Vault" },
];

export function SiteNavbar() {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-[999] w-full border-b border-white/10 bg-[#0B1A2F]/85 px-[5%] backdrop-blur supports-[backdrop-filter]:bg-[#0B1A2F]/65">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between md:min-h-18">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F5C454] to-[#E29A2B] shadow-[0_0_24px_-6px_rgba(245,196,84,0.7)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0B1A2F]" aria-hidden="true">
              <path d="M12 2l2.39 6.95H22l-6.18 4.49L18.21 22 12 17.77 5.79 22l2.39-8.56L2 8.95h7.61z" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Laima
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-[#F5C454]/80 sm:inline">
            · Lebelo
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/2662231456"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "conversion", {
                  event_category: "WhatsApp",
                  event_label: "Navbar Chat",
                });
              }
            }}
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            Chat on WhatsApp
          </a>
          <Link href="/services">
            <Button
              size="sm"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "conversion", {
                    event_category: "CTA",
                    event_label: "Get a Captain - Navbar",
                  });
                }
              }}
              className="rounded-full border-none bg-[#F5C454] px-5 text-sm font-semibold text-[#0B1A2F] hover:bg-[#FFD675]"
            >
              Get a captain
            </Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((p) => !p)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#F5C454] px-5 py-3 text-center text-sm font-semibold text-[#0B1A2F]"
              >
                Get a captain
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
