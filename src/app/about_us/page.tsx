"use client"
// import { Metadata } from "next";
import ContactUsCard from "@/components/ContactUs";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";

// 
const AboutUsPage = () => {
  return (
    <>
      <div className="py-10">
        {/* <ProductGrid></ProductGrid> */}
        <WhyChooseUs></WhyChooseUs>
      </div>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
};

export default AboutUsPage;
