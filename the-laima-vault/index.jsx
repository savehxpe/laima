import React from "react";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import { Header65 } from "./components/Header65";
import { Layout22 } from "./components/Layout22";
import { Testimonial3 } from "./components/Testimonial3";
import { Faq8 } from "./components/Faq8";
import { Cta31 } from "./components/Cta31";

export default function Page() {
  return (
    <div className="bg-white text-[#0B1A2F]">
      <SiteNavbar />
      <Header65 />
      <Layout22 />
      <Testimonial3 />
      <Faq8 />
      <Cta31 />
      <SiteFooter />
    </div>
  );
}
