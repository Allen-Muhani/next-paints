"use client"
import ContactUsCard from "@/components/ContactUs";
import Footer from "@/components/Footer";
import WhoAreWe from "@/components/WhoAreWe";
import WhyChooseUs from "@/components/WhyChooseUs";

// 
export default function AboutUsPage() {
  return (
    <>
      <div className="pt-25">
        <WhoAreWe></WhoAreWe>
        <WhyChooseUs></WhyChooseUs>
      </div>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
};


