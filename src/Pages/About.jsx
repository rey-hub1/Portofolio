/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { motion } from "motion/react"
import { FaDatabase, FaDev, FaGit, FaGithub, FaInstagram, FaPython, FaStackOverflow } from "react-icons/fa";
import HeroSplit from "../Components/hero/HeroSplit";
import { MdOutlineWeb } from "react-icons/md";
import { motion } from "motion/react";
import { SiAffinitydesigner } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useRef } from "react";
import {
    useScroll, useTransform,
    useMotionTemplate
} from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";


const animation1 = {
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    viewport: { once: false, amount: 1 },
    transition: { duration: .6, ease: "easeInOut" }
}
const leftAnimation = {
    initial: { x: "-10vw", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    exit: { x: "-10vw", opacity: 0 },
    viewport: { once: false, amount: 1 },
    transition: { duration: 1, type: "spring", stiffness: 100, damping: 9 }
}

const rightAnimation = {
    initial: { x: "10vw", opacity: 0 },
    whileInView: { x: 0, opacity: 1, },
    exit: { x: "10vw", opacity: 0 },
    viewport: { once: false, amount: 0.4 },
    transition: { duration: 1, type: "spring", stiffness: 100, damping: 9, delay: 0.2 }
}

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // window.scrollBy(0,-50);
            }
        }
    }, [hash]);
    return (
        <>
            <HeroSplit
                title="About Me"
                description="Simple introduction of me"
                linkText="Learn More"
                linkTo="/about"
                imageSrc="/images/aboutme.jpg"
            />
            <div id="who" className="min-h-[100vh]">
                <motion.h2
                    className="text-7xl text-center mb-10"
                // {...animation1}
                > Who am i<span className="text-[#b2ddd6]">?</span>
                </motion.h2>
                <div className="flex justify-center gap-8 relative min-h-[75vh]">
                    <WhoIAm rightAnimation={rightAnimation} />
                </div>
            </div>
            <Skills />
            <Experience animation={animation1} />

            <KataKata />
        </>
    );
}

function Img3({ imgSrc = "", className = "" }) {
    return (
        <motion.img
            initial={{ scale: 1, filter: "grayscale(100%)" }}
            // viewport={{ once: false, amount: 0.4 }}
            // exit={{ x: "-10vw", opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            src={imgSrc}
            className={className}
            whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
            transition={{ type: "spring" }}

        />
    )
}

export default Home;

function WhoIAm({ rightAnimation }) {
    return (<>
        <motion.div className="basis-5/12 relative"
            initial={{ scale: 1, x: "-10vw", opacity: 0 }}
            transition={{ type: "spring" }}
            viewport={{ once: false, amount: 0.4 }}
            exit={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
        >
            <Img3 imgSrc="/images/about2.jpg" className="w-64 absolute top-1/4 left-0" />
            <Img3 imgSrc="/images/about1.jpg" className="w-56 absolute bottom-4 right-24" />
            <Img3 imgSrc="/images/about3.jpg" className="w-52 absolute top-4 right-20" />
        </motion.div>
        <motion.div className="flex-col basis-5/12 justify-center" {...rightAnimation}>
            <motion.h3 className="text-3xl mt-6 mb-2 font-semibold">
                Reyno Nawfal Ghaisan
            </motion.h3>
            <p className="text-justify leading-loose">
                Hi, i&apos;m Reyno Nawfal Ghaisan, a tech
                enthusiast and aspiring Web Developer. I am currently studying at
                Smk 2 Purwakarta, West Java, Indonesia, majoring in software
                engineering. My passion and curiosity in the IT field are very
                big. Outside of the coding world, I find myself deeply immersed in
                the design field, and the fascinating world of AI. I believe that
                in today&apos;s fast-paced digital landscape, being a lifelong
                learner is not only an option, but a necessity. Let&apos;s
                continue to grow in this very fast era
            </p>
            <div className="grid grid-cols-2 max-w-full gap-x-2 gap-y-0">
                <ButtonSosmed
                    child={<> <FaInstagram className="text-2xl" /> Instagram </>}
                    url="https://www.instagram.com/reyyn23/"
                    className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"

                />
                <ButtonSosmed
                    child={<> <FaGithub className="text-2xl" /> GitHub </>}
                    url="https://www.instagram.com/reyyn23/"
                    className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"
                />
                <ButtonSosmed
                    child={<> <FaStackOverflow className="text-2xl" /> Stack Overflow </>}
                    url="https://www.instagram.com/reyyn23/"
                    className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"

                />
                <ButtonSosmed
                    child={<> <FaDev className="text-2xl" /> Dev </>}
                    url="https://www.instagram.com/reyyn23/"
                    className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"

                />
            </div>

        </motion.div>
    </>);
}


function ButtonSosmed({ child, url, className }) {
    return <button
        className={`btn btn-block btn-outline hover:border-none mt-5 text-xl rounded-xl transition-all ${className}`}
        onClick={() => { window.open("https://www.instagram.com/reyyn23/"); }}>
        {child}
    </button>;
}

function Experience() {
    return (
        <div
            className="px-10"
        >
            <motion.h2 className="text-7xl text-center mt-8 mb-10"
                initial={{ y: - 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: .6, ease: "easeInOut" }}
            >
                Experience<span className="text-[#b2ddd6]">?</span>
            </motion.h2>
            <motion.ul
                className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                initial={{ y: - 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                viewport={{ once: false, amount: .4 }}
                transition={{ duration: .6, ease: "easeInOut" }}
            >
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2023</time>
                        <div className="text-lg font-black">Jasa Infrografis</div>
                        Menjualkan Jasa membuat infografis kepada siswa sekolahan
                    </div>
                    <hr className="bg-[#84c4bb]" />
                </li>
                <li>
                    <hr className="bg-[#84c4bb]" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2024</time>
                        <div className="text-lg font-black">E-sports Coach dan Leader</div>
                        Memimpin dan melatih tim e-sports di tingkat sekolah, dengan fokus pada game Mobile Legends. Mengorganisasi sesi pelatihan mingguan, menyusun strategi untuk kompetisi, dan mengembangkan potensi pemain untuk mencapai kemenangan dalam turnamen lokal. Berhasil menciptakan kombinasi tim yang kuat melalui evaluasi berbasis pertandingan internal.
                    </div>
                    <hr className="bg-[#84c4bb]" />
                </li>

                <li>
                    <hr className="bg-[#84c4bb]" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2025</time>
                        <div className="text-lg font-black">Goggle Maneger Website Authizor</div>
                        Bekerja di goggle sebagai maneger website authizor
                    </div>
                </li>
            </motion.ul>
        </div>);
}

function    Skills() {
    return (<div className="mb-52">
        <h2 className="text-7xl font-semibold text-center mt-8 ">
            Skills<span className="text-[#b2ddd6]">?</span>
        </h2>
        <p className="text-center text-[#b2ddd6]">
            Some skills that I have mastered to provide high quality solutions
        </p>
        <div className="flex justify-center gap-10 mt-8">
            <div className="flex flex-col w-40 gap-1 items-center">
                <MdOutlineWeb size="3em" />
                <p className="text-center font-bold text-[#b2ddd6]">Full Stack Devoloper</p>
            </div>
            <div className="flex flex-col w-40 gap-1 items-center">
                <FaPython size="3em" />
                <p className="text-center font-bold text-[#b2ddd6]">Python</p>
            </div>
            <div className="flex flex-col w-40 gap-1 items-center">
                <SiAffinitydesigner size="3em" />
                <p className="text-center font-bold text-[#b2ddd6]">Design UI & UX</p>
            </div>
        </div>
        <h2 className="text-4xl font-semibold text-center mt-14 ">
            Details:
        </h2>
        <p className="text-center text-[#b2ddd6]">
            Details skills that I have mastered
        </p>
        <div className="flex justify-around">

            <div className="flex flex-col mt-8 items-center justify-center gap-2 r-border">
                <p className="text-xl">Languange | Library | Framework</p>
                <div className="grid grid-cols-5 gap-3 w-82 text-center justify-items-center justify-center text-[#f4f9f8]">
                    <p className="hover:text-[#84c4bb] cursor-default ">HTML</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">CSS</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Python</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Javascript</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Bootstrap</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Tailwind</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">React</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Jquery</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Php</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Frammer</p>
                </div>
            </div>
            <div className="flex flex-col mt-8 items-center justify-center gap-2 r-border">
                <p className="text-xl">Software | Tools</p>
                {/* <div className="flex flex-wrap gap-4 w-96 text-[#f4f9f8]"> */}
                <div className="grid grid-cols-4 gap-1 w-82 text-center justify-items-center justify-center text-[#f4f9f8]">
                    <p className="hover:text-[#84c4bb] cursor-default ">Visual Studio Code</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Intelij</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Figma</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Canva</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Capcut</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Adobe After Effect</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Adobe Photosop</p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Postman</p>
                    <p className="hover:text-[#84c4bb] cursor-default "></p>
                    <p className="hover:text-[#84c4bb] cursor-default ">Php</p>
                    <p className="hover:text-[#ff4a4a] cursor-default ">NULL</p>
                </div>
            </div>


        </div>

    </div>);
}

function KataKata() {
    const text = "Life must be lived forward, but it only makes sense if lived backwards.".split(" ");
    return (
        <div className="min-h-[90vh] flex justify-center items-center font-['Playfair']">
            <div className="App text-3xl text center">
                {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{
                            duration: 4.25,
                            delay: i / 5,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </div>
        </div>);
}


