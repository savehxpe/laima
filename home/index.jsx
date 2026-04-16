import React from "react";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Header83 } from "./components/Header83";
import { Layout239 } from "./components/Layout239";
import { Layout34 } from "./components/Layout34";
import { Stats22 } from "./components/Stats22";
import { Testimonial3 } from "./components/Testimonial3";
import { Cta31 } from "./components/Cta31";
import { Gallery5 } from "./components/Gallery5";
import { Faq8 } from "./components/Faq8";

export default function Page() {
  return (
    <div className="bg-white text-[#0B1A2F]">
      <SiteNavbar />
      <Header83 />
      <Layout239 />
      <Layout34 />
      <Stats22 />
      <Testimonial3 />
      <Cta31 />
      <Gallery5 />
      <Faq8 />
      <SiteFooter />
    </div>
  );
}
