import { useEffect, useState } from "react";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1A2F]">
        <div className="flex flex-col items-center gap-4">
          <svg
            viewBox="0 0 32 32"
            className="h-10 w-10 animate-pulse"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="loader-g"
                x1="0"
                y1="0"
                x2="32"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#F5C454" />
                <stop offset="1" stopColor="#E29A2B" />
              </linearGradient>
            </defs>
            <path
              fill="url(#loader-g)"
              d="M16 2.5l3.18 9.27H29l-7.93 5.76L24.27 27 16 21.13 7.73 27l3.2-11.47L3 11.77h9.82z"
            />
          </svg>
          <p className="text-sm font-medium text-[#F5C454]/60">
            Loading Laima
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}