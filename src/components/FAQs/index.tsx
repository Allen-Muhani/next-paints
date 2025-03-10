"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    { question: "What is a cryptocurrency exchange?", answer: "A cryptocurrency exchange is a platform that allows users to buy, sell, and trade cryptocurrencies." },
    { question: "What products does Binance provide?", answer: "Binance provides various crypto-related services including trading, staking, and lending." },
    { question: "How to buy Bitcoin and other cryptocurrencies on Binance?", answer: "You can buy cryptocurrencies using fiat currency, credit/debit card, or peer-to-peer (P2P) trading." },
    { question: "How to track cryptocurrency prices?", answer: "You can use Binance's price tracking tools or third-party websites like CoinMarketCap." },
    { question: "How to trade cryptocurrencies on Binance?", answer: "Trading on Binance can be done through spot trading, futures trading, or margin trading." },
    { question: "How to earn from crypto on Binance?", answer: "You can earn through staking, farming, and Binance Earn programs." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(index);
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
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
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;