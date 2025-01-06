import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Tambahkan ini untuk ikon GitHub
import { MdOutlineMail } from "react-icons/md";

const navigation = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="text-sm text-[#f4f9f8] font-medium" >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start my-2">
                    {/* LOGO */}
                        <div className="flex shrink-0 items-center gap-2 text-2xl border-r px-4 border-gray-300">
                            <h1 className="">Reyno</h1>

                        </div>

                        {/* NORMAL */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={classNames(
                                            "hover:bg-[#d9eeea] hover:text-[#0b1919] hover:bg-opacity-80 rounded-md px-3 py-2"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* RIGHT NAV */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-5">
                        <a
                            href="https://github.com/rey-hub1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaGithub className="h-5   w-5  " />
                        </a>
                        <a
                            href="https://github.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaInstagram className="h- w" />
                        </a>
                        <a
                            href="https://github.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <FaWhatsapp className="h-5 w" />
                        </a>
                        <a
                            href="https://github.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <MdOutlineMail className="h-5  w" />
                        </a>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            className={classNames(
                                "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base"
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
