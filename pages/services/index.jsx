import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../services"), { ssr: false });
export default Page;
