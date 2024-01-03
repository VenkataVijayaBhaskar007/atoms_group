import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import About from './../../../components/About/index';

export const metadata: Metadata = {
  title: "Atoms group",
  description: "This is Contact Page",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
    </div>
  );
};

export default SupportPage;
