"use client";

import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const COLS = [
  {
    title: "Service",
    links: [
      { href: "/services", label: "Services" },
      { href: "/whatsapp-first", label: "WhatsApp First" },
      { href: "/own-your-route", label: "Own Your Route" },
      { href: "/the-laima-vault", label: "The Laima Vault" },
    ],
  },
  {
    title: "Captains",
    links: [
      { href: "/own-your-route", label: "Become a Captain" },
      { href: "/own-your-route#training", label: "Training" },
      { href: "/the-laima-vault", label: "Earnings & Vault" },
      { href: "/own-your-route#kit", label: "Starter Kit" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "About" },
      { href: "/services", label: "Coverage" },
      { href: "https://wa.me/2662231456", label: "Contact" },
      { href: "/", label: "Press" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0B1A2F] px-[5%] pt-20 text-white/80">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F5C454] to-[#E29A2B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0B1A2F]" aria-hidden="true">
                  <path d="M12 2l2.39 6.95H22l-6.18 4.49L18.21 22 12 17.77 5.79 22l2.39-8.56L2 8.95h7.61z" />
                </svg>
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">Laima</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Ho laima ha dinaledi — the shining of stars. A WhatsApp-first
              logistics layer for the Mountain Kingdom, built by Basotho, for
              Basotho.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Maseru HQ
              </p>
              <p className="mt-2 text-sm">Kingsway · Maseru · Lesotho</p>
              <a
                href="tel:+26622314567"
                className="mt-1 block text-sm text-white/80 hover:text-[#F5C454]"
              >
                +266 2231 4567
              </a>
              <a
                href="mailto:info@laima.ls"
                className="mt-1 block text-sm text-white/80 hover:text-[#F5C454]"
              >
                info@laima.ls
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[BiLogoWhatsapp, BiLogoFacebookCircle, BiLogoInstagram, FaXTwitter, BiLogoLinkedinSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#F5C454] hover:text-[#F5C454]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C454]">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/75 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Laima Logistics (Pty) Ltd. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li><Link href="/" className="hover:text-white">Terms</Link></li>
            <li><Link href="/" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/" className="hover:text-white">Compliance</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
