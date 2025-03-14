import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import { EmailAddress, PhoneNumber1, PhoneNumber2, WhatsUpLink } from "@/utils/constants/contacts";

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

                    <p className="mt-2 flex items-center text-gray-400"><Mail className="mr-2" /> {EmailAddress}</p>
                    <p className="mt-2 flex items-center text-gray-400"><Phone className="mr-2" /> {PhoneNumber1}</p>
                    {/* Add Kenyan phone number */}
                    <p className="mt-2 flex items-center text-gray-400"><Phone className="mr-2" /> {PhoneNumber2} </p>
                    <div className="flex space-x-4 mt-4">
                        <a href={WhatsUpLink} className="text-green-400 hover:text-green-500"><FaWhatsapp size={24} /></a>
                        <a href="#" className="text-pink-500 hover:text-pink-600"><FaInstagram size={24} /></a>
                        <a href="#" className="text-blue-500 hover:text-blue-600"><FaFacebook size={24} /></a>
                        <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter size={24} /></a>
                        <a href="#" className="text-black hover:text-gray-700"><FaTiktok size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
