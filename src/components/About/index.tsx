"use client";

import Lottie from "lottie-react";
import animationData from "../../lottie_animations/color_pallet.json";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ">
            <div className="w-full md:w-1/2 flex justify-center">
                <Lottie animationData={animationData} loop={false} className="w-150 h-130" />
            </div>

            {/* Right: About Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 text-xl">
                    We are a passionate team dedicated to providing top-notch products & services in
                    our industry. Our mission is to deliver excellence through innovation
                    and commitment.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="text-orange-500" size={20} />
                        Industry-leading expertise
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="text-orange-500" size={20} />
                        Customer-focused approach
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="text-orange-500" size={20} />
                        Commitment to innovation
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="text-orange-500" size={20} />
                        Trusted by global brands
                    </li>
                </ul>

                {/* Read More Button */}
                <button
                    className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    Read More
                </button>
            </div>
        </section>
    );
}
