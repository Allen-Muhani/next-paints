import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactUsCard = () => {
    return (
        <div className="flex justify-center flex-col p-6">

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:flex md:space-x-8">
                {/* Contact Form Section */}
                <div className="md:w-2/3 mt-6 md:mt-0">
                    <h2 className="text-2xl font-bold text-gray-800">Make and Order or Get in Touch with us</h2>
                    <form className="mt-4 space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-lg" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-lg" />
                        <input type="text" placeholder="Your Phone Number" className="w-full p-2 border border-gray-300 rounded-lg" />
                        <textarea placeholder="Your Message / Quote Request" className="w-full p-2 border border-gray-300 rounded-lg" rows="3"></textarea>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Send Message</button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="md:w-1/3 justify-center flex-col p-6">

                    <p className="text-gray-600 mt-2 text-xl">We'd love to hear from you! Reach out to us through any of the following:</p>
                    <p className="mt-4 flex items-center text-gray-700"><Mail className="mr-2" /> info@nextpaints.co.ug</p>
                    <p className="mt-2 flex items-center text-gray-700"><Phone className="mr-2" /> +123 456 7890</p>
                    <p className="mt-2 flex items-center text-gray-700"><Phone className="mr-2" /> +987 654 3210</p>
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </a>
                </div>


            </div>
        </div>

    );
};

export default ContactUsCard;