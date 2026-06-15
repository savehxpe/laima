import dynamic from "next/dynamic";
import Head from "next/head";
import { Navbar } from "../../components/sebabatso-2026/Navbar";
import { AboutSection } from "../../components/sebabatso-2026/AboutSection";
import { ShowcaseSection } from "../../components/sebabatso-2026/ShowcaseSection";
import { ApplicationDetails } from "../../components/sebabatso-2026/ApplicationDetails";
import { FormPreview } from "../../components/sebabatso-2026/FormPreview";
import { DisclaimerSection } from "../../components/sebabatso-2026/DisclaimerSection";

const Hero3D = dynamic(
  () => import("../../components/sebabatso-2026/Hero3D"),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      <Head>
        <title>Laima · Sebabatso / STEAM 2026 Application</title>
        <meta
          name="description"
          content="Laima — a WhatsApp-first hyperlocal delivery ecosystem for Lesotho. Applying for the Sebabatso 2026 and STEAM 2026 Youth Empowerment Initiative."
        />
        <meta
          name="keywords"
          content="Laima, Sebabatso 2026, STEAM 2026, Lesotho innovation, WhatsApp logistics, hyperlocal delivery, youth empowerment, UNDP Lesotho, Basotho entrepreneurs"
        />
        <meta property="og:title" content="Laima · Sebabatso / STEAM 2026" />
        <meta
          property="og:description"
          content="A WhatsApp-first hyperlocal delivery ecosystem purpose-built for the Mountain Kingdom. Applying for the Sebabatso 2026 cohort."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laima.ls/sebabatso-2026" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laima · Sebabatso / STEAM 2026" />
        <meta
          name="twitter:description"
          content="A WhatsApp-first hyperlocal delivery ecosystem purpose-built for the Mountain Kingdom."
        />
      </Head>

      <div className="relative min-h-screen bg-[#0B1A2F] text-white">
        <Navbar />

        <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden md:min-h-[700px]">
          <Hero3D />
          <div className="relative z-10 px-[5%] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5C454]/70">
              The Prime Minister&apos;s Vanguard Initiative · UNDP Lesotho
            </p>
            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
              Sebabatso &amp;{" "}
              <span className="bg-gradient-to-r from-[#F5C454] to-[#E29A2B] bg-clip-text text-transparent">
                STEAM
              </span>
              <br />
              <span className="text-3xl text-white/80 md:text-5xl lg:text-6xl">
                2026 Application
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base text-white/60 md:text-lg">
              A WhatsApp-first hyperlocal delivery ecosystem for the Mountain
              Kingdom — submitting our best idea for change.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://go.undp.org/THv"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F5C454] to-[#E29A2B] px-8 py-3 text-base font-semibold text-[#0B1A2F] shadow-[0_0_32px_-4px_rgba(245,196,84,0.4)] transition-all hover:shadow-[0_0_48px_-4px_rgba(245,196,84,0.7)]"
              >
                Apply Now
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        <AboutSection />
        <ShowcaseSection />
        <ApplicationDetails />
        <FormPreview />
        <DisclaimerSection />

        <footer className="border-t border-white/5 px-[5%] py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-white/40 md:flex-row md:text-left">
            <p>
              Laima &middot; Application for Sebabatso / STEAM 2026
            </p>
            <p>
              &copy; {new Date().getFullYear()} Laima Logistics (Pty) Ltd.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
