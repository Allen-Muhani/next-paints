import { Metadata } from "next";
import ProductGrid from "./products.grid";
import ContactUsCard from "@/components/ContactUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ProductsPage = () => {
  return (
    <>
      <div className="py-10">
        <ProductGrid/>
      </div>
      <ContactUsCard/>
      <Footer/>
    </>
  );
};

export default ProductsPage;
