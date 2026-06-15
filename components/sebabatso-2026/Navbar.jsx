"use client";

import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-[999] w-full border-b border-white/5 bg-[#0B1A2F]/80 px-[5%] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B1A2F]/60">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between md:min-h-18">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F5C454] to-[#E29A2B] shadow-[0_0_20px_-4px_rgba(245,196,84,0.6)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#0B1A2F]" aria-hidden="true">
              <path d="M12 2l2.39 6.95H22l-6.18 4.49L18.21 22 12 17.77 5.79 22l2.39-8.56L2 8.95h7.61z" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Laima
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#innovation", label: "Innovation" },
            { href: "#application", label: "Application" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://go.undp.org/THv"
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full bg-gradient-to-r from-[#F5C454] to-[#E29A2B] px-5 py-1.5 text-sm font-semibold text-[#0B1A2F] shadow-[0_0_24px_-4px_rgba(245,196,84,0.4)] transition-all hover:shadow-[0_0_32px_-4px_rgba(245,196,84,0.7)]"
          >
            Apply Now
          </a>
        </nav>

        <a
          href="/"
          className="hidden text-xs font-medium uppercase tracking-wider text-white/40 transition-colors hover:text-white/70 md:block"
        >
          Back to Laima
        </a>

        <a
          href="https://go.undp.org/THv"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gradient-to-r from-[#F5C454] to-[#E29A2B] px-4 py-1.5 text-sm font-semibold text-[#0B1A2F] md:hidden"
        >
          Apply
        </a>
      </div>
    </header>
  );
}
