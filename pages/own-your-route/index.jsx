import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../own-your-route"), { ssr: false });
export default Page;
