import Head from "next/head";
import Page from "../../whatsapp-first";

export default function WhatsAppFirstPage() {
    return (
        <>
            <Head>
                <title>WhatsApp First · Laima — Order Delivery via WhatsApp in Lesotho</title>
                <meta
                    name="description"
                    content="Order Laima deliveries directly through WhatsApp. No app download needed. Send a message, share your location, and track your delivery in real time across Maseru."
                />
                <meta
                    name="keywords"
                    content="WhatsApp delivery, order via WhatsApp, Laima WhatsApp, Lesotho delivery, no app delivery, message to order, Maseru food delivery"
                />
                <meta property="og:title" content="WhatsApp First · Laima — Order via WhatsApp in Lesotho" />
                <meta
                    property="og:description"
                    content="No app download needed. Send a message, share your location, and track your delivery in real time."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://laima.ls/whatsapp-first" />
                <meta property="og:image" content="https://laima.ls/images/whatsapp-phone.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WhatsApp First · Laima" />
                <meta
                    name="twitter:description"
                    content="No app download needed. Order Laima deliveries directly through WhatsApp."
                />
            </Head>
            <Page />
        </>
    );
}