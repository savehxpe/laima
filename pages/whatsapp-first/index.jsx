import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../whatsapp-first"), { ssr: false });
export default Page;
