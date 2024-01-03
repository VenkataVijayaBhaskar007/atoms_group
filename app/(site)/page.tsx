import { Metadata } from "next";
import Hero from "@/components/Hero";

import About from "@/components/About";



import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";





export const metadata: Metadata = {
  title: "Atoms Group",
  description: "This is Home page",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />

      <About />
     
      <FAQ />
      <CTA />
    </main>
  );
}
