import React from "react";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Header65 } from "./components/Header65";
import { Layout22 } from "./components/Layout22";
import { Layout502 } from "./components/Layout502";
import { Layout298 } from "./components/Layout298";
import { Layout254 } from "./components/Layout254";
import { Layout239 } from "./components/Layout239";
import { Faq8 } from "./components/Faq8";
import { Cta31 } from "./components/Cta31";

export default function Page() {
  return (
    <div className="bg-white text-[#0B1A2F]">
      <SiteNavbar />
      <Header65 />
      <Layout22 />
      <Layout502 />
      <Layout298 />
      <Layout254 />
      <Layout239 />
      <Faq8 />
      <Cta31 />
      <SiteFooter />
    </div>
  );
}
