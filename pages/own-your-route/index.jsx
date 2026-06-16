import Head from "next/head";
import Page from "../../own-your-route";

export default function OwnYourRoutePage() {
    return (
        <>
            <Head>
                <title>Own Your Route · Laima — Become a Delivery Captain in Lesotho</title>
                <meta
                    name="description"
                    content="Become a Laima Captain and earn on your own terms. Flexible delivery work across Maseru with training, kit, and earnings paid to your Laima Vault."
                />
                <meta
                    name="keywords"
                    content="Laima Captain, delivery driver Maseru, earn money Lesotho, gig economy Lesotho, delivery job, own your route, become a rider"
                />
                <meta property="og:title" content="Own Your Route · Laima — Become a Delivery Captain" />
                <meta
                    property="og:description"
                    content="Earn on your own terms. Flexible delivery work across Maseru with training, kit, and earnings paid to your Laima Vault."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://laima.ls/own-your-route" />
                <meta property="og:image" content="https://laima.ls/images/star-rider-fast.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Own Your Route · Laima" />
                <meta
                    name="twitter:description"
                    content="Earn on your own terms. Flexible delivery work across Maseru."
                />
            </Head>
            <Page />
        </>
    );
}