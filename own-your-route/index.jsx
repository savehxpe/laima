import React from "react";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Header65 } from "./components/Header65";
import { Layout419 } from "./components/Layout419";
import { Cta31 } from "./components/Cta31";
import { Contact9 } from "./components/Contact9";

export default function Page() {
  return (
    <div className="bg-white text-[#0B1A2F]">
      <SiteNavbar />
      <Header65 />
      <Layout419 />
      <Cta31 />
      <Contact9 />
      <SiteFooter />
    </div>
  );
}
