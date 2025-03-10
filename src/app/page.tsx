import About from "@/components/About";
import ContactUsCard from "@/components/ContactUs";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <FAQ></FAQ>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
}
