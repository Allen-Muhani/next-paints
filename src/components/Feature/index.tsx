"use client";
import React from "react";
import { PaintBucket, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const FeaturesBenefits = () => {
    const features = [
        {
            icon: <PaintBucket size={40} className="text-black group-hover:text-orange-600 transition duration-300" />,
            title: "EXTRA COVERAGE",
            description:
                "Give your walls and ceilings extra coverage, and smooth finishing with our acrylic-based silk emulsion.",
        },
        {
            icon: <ShieldCheck size={40} className="text-black group-hover:text-orange-600 transition duration-300" />,
            title: "DURABLE AND FADE-RESISTANT",
            description:
                "Give your woods, metals, and walls a durable, washable, and fade-resistant finishing. Suited for both interior and exterior use.",
        },
        {
            icon: <Sparkles size={40} className="text-black group-hover:text-orange-600 transition duration-300" />,
            title: "GLOSSY FINISHING",
            description:
                "Give your walls and ceilings extra coverage, and smooth finishing with our acrylic-based silk emulsion.",
        },
    ];

    return (
        <div className="relative bg-gray-200 py-16">
            {/* SVG Wave Background */}
            <div className="absolute top-0 left-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full">
                    <path fill="#CBD5E1" fillOpacity="1"
                        d="M0,192L40,170.7C80,149,160,107,240,122.7C320,139,400,213,480,213.3C560,213,640,139,720,122.7C800,107,880,149,960,170.7C1040,192,1120,192,1200,202.7C1280,213,1360,235,1400,245.3L1440,256V0H1400C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0H0Z">
                    </path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    FEATURES AND BENEFITS
                </motion.h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md group hover:shadow-lg transition duration-300"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-orange-600">{feature.title}</h3>
                            <p className="text-gray-700 mt-2">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBenefits;
