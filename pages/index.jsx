import Head from "next/head";
import Page from "../home";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Laima · WhatsApp-First Logistics for Lesotho</title>
                <meta
                    name="description"
                    content="Laima is a WhatsApp-first hyperlocal delivery ecosystem for the Mountain Kingdom. Order deliveries, track captains, and move goods across Maseru and beyond — all from your phone."
                />
                <meta
                    name="keywords"
                    content="Laima, Lesotho logistics, Maseru delivery, WhatsApp delivery, courier Lesotho, hyperlocal delivery, Basotho business, cross-border logistics SADC"
                />
                <meta property="og:title" content="Laima · WhatsApp-First Logistics for Lesotho" />
                <meta
                    property="og:description"
                    content="Order deliveries, track captains, and move goods across Maseru and beyond — all from WhatsApp."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://laima.ls" />
                <meta property="og:image" content="https://laima.ls/images/hero-wide.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Laima · WhatsApp-First Logistics for Lesotho" />
                <meta
                    name="twitter:description"
                    content="Order deliveries, track captains, and move goods across Maseru and beyond — all from WhatsApp."
                />
                <meta name="twitter:image" content="https://laima.ls/images/hero-wide.webp" />
            </Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Laima Logistics",
                        url: "https://laima.ls",
                        logo: "https://laima.ls/laima-star.svg",
                        email: "team@outworldcreative.com",
                        telephone: "+26622314567",
                        description:
                            "WhatsApp-first hyperlocal delivery ecosystem for Lesotho.",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Kingsway",
                            addressLocality: "Maseru",
                            addressCountry: "LS",
                        },
                        sameAs: ["https://wa.me/2662231456"],
                    }),
                }}
            />
            <Page />
        </>
    );
}
