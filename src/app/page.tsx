import About from "@/components/About";
import ContactUsCard from "@/components/ContactUs";
import FeaturesBenefits from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <FeaturesBenefits></FeaturesBenefits>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
}

