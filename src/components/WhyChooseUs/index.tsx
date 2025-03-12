import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie_animations/painter_at_work.json";
import { CheckCircle } from "lucide-react";

const reasons = [
    "Unmatched Quality",
    "Innovative Products",
    "Sustainability Focused",
    "Customer-Centric Approach",
    "Wide Range of Solutions",
    "Years of Expertise"
];

const WhyChooseUs = () => {
    return (

        <section className="flex flex-col items-center">
            {/* Lottie Background */}
            <h2 className="text-4xl font-bold text-orange-600 pt-10">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-10">
                {/* Text Section */}
                <div className="relative w-1/2 z-10">
                    <p className="mt-4 text-gray-700 text">
                        Next Paints is a leader in premium coating solutions, delivering
                        innovation and quality for over two decades. Our eco-friendly
                        products bring vibrant colors, lasting durability, and a sustainable
                        approach to every project.
                    </p>
                    <ul className="space-y-2 text-lg text-gray-900 pt-5">
                        {reasons.map((reason) => (
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-orange-500" size={20} />
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Section */}
                <div className="relative w-1/2 flex justify-center z-10">
                    <Lottie
                        animationData={animationData}
                        className="absolute top-0 left-0 w-full h-full opacity-20"
                    />
                    <img
                        src="/assets/question-man.png" // Replace with your image path
                        alt="Confused man holding question mark"
                        className="max-w-sm rounded-lg shadow-lg"
                    />
                </div>
            </div>

        </section>
    );
};

export default WhyChooseUs;
