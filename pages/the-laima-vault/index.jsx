import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../the-laima-vault"), { ssr: false });
export default Page;
