import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#0B1A2F" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/laima-star.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}