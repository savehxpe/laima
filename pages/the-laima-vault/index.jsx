import Head from "next/head";
import Page from "../../the-laima-vault";

export default function LaimaVaultPage() {
    return (
        <>
            <Head>
                <title>The Laima Vault · Earnings & Rewards for Delivery Captains</title>
                <meta
                    name="description"
                    content="The Laima Vault is where Captains track earnings, access savings, and unlock rewards. Transparent pay, daily settlements, and financial tools for Basotho riders."
                />
                <meta
                    name="keywords"
                    content="Laima Vault, delivery earnings, captain pay, rider rewards, Lesotho gig economy, daily settlements, Basotho riders"
                />
                <meta property="og:title" content="The Laima Vault · Earnings & Rewards for Delivery Captains" />
                <meta
                    property="og:description"
                    content="Track earnings, access savings, and unlock rewards. Transparent pay for Basotho riders."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://laima.ls/the-laima-vault" />
                <meta property="og:image" content="https://laima.ls/images/earnings-dashboard.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="The Laima Vault" />
                <meta
                    name="twitter:description"
                    content="Track earnings, access savings, and unlock rewards. Transparent pay for Basotho riders."
                />
            </Head>
            <Page />
        </>
    );
}