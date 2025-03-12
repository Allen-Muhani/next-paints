"use client"
import ContactUsCard from "@/components/ContactUs";
import Footer from "@/components/Footer";
import WhoAreWe from "@/components/WhoAreWe";
import WhyChooseUs from "@/components/WhyChooseUs";

// 
const AboutUsPage = () => {
  return (
    <>
      <div className="pt-25">
        {/* <ProductGrid></ProductGrid> */}
        <WhoAreWe></WhoAreWe>
        <WhyChooseUs></WhyChooseUs>
      </div>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
};

export default AboutUsPage;

