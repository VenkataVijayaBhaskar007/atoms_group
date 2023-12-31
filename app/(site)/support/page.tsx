import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Atoms group",
  description: "This is Contact Page",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact/>
    </div>
  );
};

export default SupportPage;
