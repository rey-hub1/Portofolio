import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const navigation = [
    { name: "Home", 
        path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const location = useLocation();
    return (
        <Disclosure as="nav" className="text-sm text-[#f4f9f8] font-medium">
            <div className="mx-auto max-w-7xl px-2 md:px-[8vw] lg:px-[8vw]">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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

                    {/* Main Content: Logo and Navigation */}
                    <div className="flex flex-1 items-center justify-between">
                        {/* Logo */}
                        <div className="hidden md:flex shrink-0 items-center gap-2 text-2xl border-r pr-3 border-gray-300">
                            <svg
                                width="46"
                                height="22"
                                viewBox="0 0 46 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.48535 4.70312H5.72168C6.68262 4.70312 7.49414 4.84961 8.15625 5.14258C8.82422 5.43555 9.33105 5.86914 9.67676 6.44336C10.0283 7.01172 10.2041 7.71191 10.2041 8.54395C10.2041 9.12988 10.084 9.66602 9.84375 10.1523C9.60938 10.6328 9.26953 11.043 8.82422 11.3828C8.38477 11.7168 7.85742 11.9658 7.24219 12.1299L6.76758 12.3145H2.78613L2.76855 10.9346H5.77441C6.38379 10.9346 6.89062 10.8291 7.29492 10.6182C7.69922 10.4014 8.00391 10.1113 8.20898 9.74805C8.41406 9.38477 8.5166 8.9834 8.5166 8.54395C8.5166 8.05176 8.41992 7.62109 8.22656 7.25195C8.0332 6.88281 7.72852 6.59863 7.3125 6.39941C6.90234 6.19434 6.37207 6.0918 5.72168 6.0918H3.18164V17.5H1.48535V4.70312ZM8.96484 17.5L5.85352 11.6992L7.62012 11.6904L10.7754 17.3945V17.5H8.96484ZM27.547 16.1201V17.5H20.7707V16.1201H27.547ZM21.1134 4.70312V17.5H19.4171V4.70312H21.1134ZM26.6505 10.2051V11.585H20.7707V10.2051H26.6505ZM27.4591 4.70312V6.0918H20.7707V4.70312H27.4591ZM37.0765 4.70312L40.3988 11.1279L43.7298 4.70312H45.6546L41.2425 12.7188V17.5H39.5462V12.7188L35.1341 4.70312H37.0765Z"
                                    fill="#D9EEEA"
                                />
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="41"
                                    y2="12"
                                    stroke="#D9EEEA"
                                />
                            </svg>
                        </div>

                        {/* Normal Navigation */}
                        <div className="hidden md:block">
                            <div className="flex space-x-4 ">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={classNames(
                                            "hover:bg-[#d9eeea] hover:text-[#0b1919] hover:bg-opacity-80 rounded-md px-3 py-2 relative",
                                            location.pathname === item.path ? "after:absolute after:left-0  after:bottom-0 after:w-full after:h-[2px] after:bg-[#f4f9f8] after:rounded-full" : ""
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <motion.DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            on
                            className={classNames(
                                "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base"
                            )}
                        >
                            {item.name}
                        </motion.DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
