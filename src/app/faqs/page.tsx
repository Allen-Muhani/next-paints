import ContactUsCard from "@/components/ContactUs";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Us",
//   description: "This is About Page for Startup Nextjs Template",
//   // other metadata
// };

const FAQs = () => {
  return (
    <>
      <div className="py-10">
        <FAQ></FAQ>
      </div>
      <ContactUsCard></ContactUsCard>
      <Footer></Footer>
    </>
  );
};

export default FAQs;
