"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/lottie_animations/color_pallet.json";

export default function AboutUs() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ">
            {/* Left: Lottie Animation */}
            <div className="w-full md:w-1/2 flex justify-center">
                {/* TODO: Update animation */}
                <Lottie animationData={animationData} loop={true} className="w-150 h-130" />
            </div>

            {/* Right: About Content */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 text-xl">
                    {/* TODO: Update text */}
                    We are a passionate team dedicated to providing top-notch services in
                    our industry. Our mission is to deliver excellence through innovation
                    and commitment.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-600 space-y-2">
                    <li>✔️ Industry-leading expertise</li>
                    <li>✔️ Customer-focused approach</li>
                    <li>✔️ Commitment to innovation</li>
                    <li>✔️ Trusted by global brands</li>
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
