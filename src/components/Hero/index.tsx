"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "../../../public/lottie_animations/painter_at_work.json";

export default function Hero() {

  useEffect(() => {

  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-between">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center justify-around">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Colour your world with <span className="text-4xl md:text-5xl font-bold text-red-700">Next Paints</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide top-quality solutions tailored to your needs. Join us and take your business to the next level.
          </p>
          <div className="mt-6 flex justify-center space-around flex-col space-y-4">

            <Link href="/order">
              <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                Order Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Animation */}
        <div className="hidden lg:block w-1/2 h-[80vh] relative flex items-center justify-center">
          <Lottie animationData={animationData} loop={true} className="absolute inset-0 w-full h-full flex pl-16" />
        </div>
      </div>
    </section>
  );
}
