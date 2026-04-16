import dynamic from "next/dynamic";
const Page = dynamic(() => import("../home"), { ssr: false });
export default Page;
