import Head from "next/head";
import Page from "../../services";

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Services · Laima — Same-Day Delivery, Cross-Border & WhatsApp Logistics</title>
                <meta
                    name="description"
                    content="Laima offers three ways to move: same-day delivery across Maseru, cross-border shipping to South Africa, and WhatsApp-first concierge logistics for businesses."
                />
                <meta
                    name="keywords"
                    content="Laima services, Maseru delivery, same-day delivery Lesotho, cross-border logistics, SADC shipping, WhatsApp logistics, courier Maseru"
                />
                <meta property="og:title" content="Services · Laima — Same-Day Delivery, Cross-Border & WhatsApp Logistics" />
                <meta
                    property="og:description"
                    content="Same-day delivery across Maseru, cross-border shipping to South Africa, and WhatsApp-first logistics for businesses."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://laima.ls/services" />
                <meta property="og:image" content="https://laima.ls/images/hero-wide.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services · Laima" />
                <meta
                    name="twitter:description"
                    content="Same-day delivery across Maseru, cross-border shipping to South Africa, and WhatsApp-first logistics."
                />
            </Head>
            <Page />
        </>
    );
}