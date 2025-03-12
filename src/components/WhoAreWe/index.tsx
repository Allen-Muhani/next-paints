import React from "react";
import { CheckCircle } from "lucide-react";


const WhoAreWe = () => {
    return (

        <section className="flex flex-col items-center">
            {/* Lottie Background */}
            <h2 className="text-4xl font-bold text-orange-600 pt-10">Who are we?</h2>
            <div className="flex flex-col items-right justify-between max-w-6xl mx-auto py-10">

                <p className="mt-4 text-gray-700 text text-xl">
                    Next Paints is a brand manufactured by Next Paints Limited, which is an Organically Ugandan business established in Kampala, Uganda. From humble beginnings Next Paints has rooted itself in the Ugandan market as a significant player in the surface coatings industry, allowing us to serve customers from all over the country.
                </p>
                <p className="mt-4 text-gray-700 text text-xl">
                    We offers quality paints at affordable prices for all types of application. We produce our paints in conformity with international standards so as to ensure that our customers needs are satisfied.
                </p>
                <p className="mt-4 text-gray-700 text text-xl">
                    Driven by an urge to excel, Next Paints Limited manufactures quality paints for all applications. Among the products the company manufactures are:
                </p>
                <ul className="space-y-2 text-lg text-gray-900 pt-5 pl-10">
                    {["Decorative Paints", "Timber Finishes Primers", "Primers Thinners Adhesives"].map((reason) => (
                        <li className="flex items-center gap-2">
                            <CheckCircle className="text-orange-500" size={20} />
                            {reason}
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-gray-700 text text-xl">
                    Additionally, through partnership with multiple international brands, we are able to more extensively fulfil of our customers coatings and construction needs. Both our head office and manufacturing facility are located in the heart of Kampala. You can find our head office, our showroom and our manufacturing facility at the Robert Mugabe – Kireka Road Junction. Our manufacturing facility boasts of a well-equipped research and development lab, quality control lab and a manufacturing plant with state of the art machinery, which enables us to deliver quality paints that we promise to our customers.
                </p>
            </div>
        </section >
    );
};

export default WhoAreWe;
