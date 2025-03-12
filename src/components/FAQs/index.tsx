"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    { question: "What kind of coating products does next paints offer?", answer: "Next Paints offers a wide range of high-quality coating products, including interior and exterior paints, weather-resistant paints, eco-friendly coatings, and specialized finishes. Our products are designed to meet the unique needs of residential, commercial, and industrial applications." },
    { question: "How does Next Paints ensure the quality of it`s producst?", answer: "We prioritize excellence in every step of our production process. By leveraging advanced technologies, strict quality control measures, and the expertise of our skilled team, Next Paints ensures that every product we deliver meets the highest standards of performance and durability." },
    { question: "Are Next Paints products environmentaly friendly?", answer: "Yes, Next Paints is committed to sustainability. Our products are formulated with eco-conscious ingredients, and we use responsible manufacturing practices to minimize our environmental impact. We aim to provide customers with coating solutions that enhance their spaces while promoting a greener future." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(index);
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-red-700">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <button
                            className="w-full flex justify-between items-center text-lg font-semibold"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{index + 1}. {faq.question}</span>
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-600 text-xl">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;