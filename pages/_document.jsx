import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#0B1A2F" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/laima-star.svg" />
                <link rel="preload" as="image" href="/images/hero-mosaic-2.webp" />
                <link rel="preload" as="image" href="/images/hero-mosaic-5.webp" />
                <link rel="preload" as="image" href="/images/hero-mosaic-8.webp" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}