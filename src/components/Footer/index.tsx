import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <Image src="/images/logo/logo_white.png"
                        alt="logo"
                        width={120}
                        height={25}>

                    </Image>
                    <p className="mt-2 text-gray-400">Providing quality products and services to enhance your business and lifestyle.</p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-semibold">Products</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Wall sheen silk emulsion paint</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Wall matt emulsion paint</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Aqua Undercoat Matt emulsion paint</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Trowel-On Texture Fine</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Trowel-On Texture Gritty</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Trowel-On Marble Stone Finish</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Armor Coat Matt Emulsion Paint</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Trowel-On Texture Cemento</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold">Services</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Painting services</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>

                    <p className="mt-2 flex items-center text-gray-400"><Mail className="mr-2" /> info@nextpaints.co.ug</p>
                    <p className="mt-2 flex items-center text-gray-400"><Phone className="mr-2" /> +256 (0)770 857 931</p>
                    {/* Add Kenyan phone number */}
                    <p className="mt-2 flex items-center text-gray-400"><Phone className="mr-2" /> +256 (0)770 857 931 </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
