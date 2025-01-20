import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
    return (
        <div className="min-h-full ">
            <div className="">
                {/* Background Image */}
                <img src="/images/hijau.jpeg"
                    className="h-52 w-full object-cover opacity-15 rounded-b-7xl"
                    alt="Background"
                />
                <div className="-mt-32 px-[4vw] lg:px-0">
                    {/* Contact Form Container */}
                    <div className="grid sm:grid-cols-2 opacity-90 items-start text-[#d9eeea] gap-14 p-8 mx-auto max-w-4xl bg-[#233e3d] shadow-2xl rounded-md">
                        {/* Contact Information */}
                        <div>
                            <h1 className="text-3xl font-bold">Let&apos;s Connect</h1>
                            <p className="text-sm mt-4">
                                Interested in collaborating or exploring new business opportunities?
                                Let&apos;s build something amazing together.
                            </p>

                            {/* Email Section */}
                            <div className="mt-12">
                                <h2 className="text-xl font-bold">Email</h2>
                                <ul className="mt-4">
                                    <li className="flex items-center">
                                        <div className="bg-[#b2ddd6] p-3 rounded-full flex items-center justify-center shrink-0">
                                            <MdOutlineMail size={25} className="text-Az-900" />
                                        </div>
                                        <a href="mailto:info@example.com" className="text-sm ml-4">
                                            <small className="block">Email</small>
                                            <strong>info@example.com</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-12">
                                <h2 className="text-xl font-bold">Social Media</h2>
                                <ul className="flex mt-4 space-x-4">
                                    {/* SATU */}
                                    <a href="https://www.instagram.com/reyyn23/" target="_blank" rel="noopener noreferrer">
                                        <li className="bg-[#b2ddd6] p-3 rounded-full flex items-center justify-center shrink-0">
                                            <FaLinkedin size={25} className="text-Az-900" />
                                        </li>
                                    </a>
                                    <a href="https://www.instagram.com/reyyn23/" target="_blank" rel="noopener noreferrer">
                                        <li className="bg-[#b2ddd6] p-3 rounded-full flex items-center justify-center shrink-0">
                                            <BsInstagram size={25} className="text-Az-900" />
                                        </li>
                                    </a>
                                    {/* Add more social icons as needed */}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="ml-auto space-y-4 text-[#264948]">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-[#f4f9f8] rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-[#f4f9f8] rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-[#f4f9f8] rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full bg-[#f4f9f8] rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#5aa79f] hover:bg-[#0b1919] hover:text-[#d9eeea] transition-all duration-200 rounded-md text-sm px-4 py-3 w-full mt-6"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
