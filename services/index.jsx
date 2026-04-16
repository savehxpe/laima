import React from "react";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Header65 } from "./components/Header65";
import { Layout237 } from "./components/Layout237";
import { Layout420 } from "./components/Layout420";
import { Layout348 } from "./components/Layout348";
import { Gallery5 } from "./components/Gallery5";
import { Cta31 } from "./components/Cta31";

export default function Page() {
  return (
    <div className="bg-white text-[#0B1A2F]">
      <SiteNavbar />
      <Header65 />
      <Layout237 />
      <Layout420 />
      <Layout348 />
      <Gallery5 />
      <Cta31 />
      <SiteFooter />
    </div>
  );
}
