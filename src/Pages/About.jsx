/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { motion } from "motion/react"
import {
    FaDev,
    FaGithub,
    FaInstagram,
    FaPython,
    FaStackOverflow,
} from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import TextHorizontal from "../utils/TextHorizontal";


const animation1 = {
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    viewport: { once: false, amount: 1 },
    transition: { duration: 0.6, ease: "easeInOut" },
};
function Home() {
    return (
        <div className="bg-Az-920 ">
            {/* Section 1 */}
            <Who />
            <Skills />
            <Experience animation={animation1} />
            <div className="min-h-[20vh]"></div>
            {/* <KataKata /> */}
        </div>
    );
}

function Who() {
    // Ref dan Scroll untuk Bagian Pertama
    const ref1 = useRef(null);
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["start start", "end start"],
    });

    const bgY1 = useTransform(scrollYProgress1, [0, 1], ["0%", "40%"]);

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref1,
        offset: ["0.4 start", "end start"],
    });

    const bgY2 = useTransform(scrollYProgress2, [0, 1], [1, 0]);

    // Inview
    const fadeInAnim = {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };


    return (
        <motion.div
            ref={ref1}
            style={{ y: bgY1 }}
            className="min-h-[160vh] xl:min-h-[100vh] px-[8vw] pt-4 relative z-0 bg-Az-950 "
           
        >
            <motion.p
                ref={ref1}
                className="text-Az-300 text-sm mb-1"
                variants={fadeInAnim}
                initial="initial"
                whileInView="animate"
                transition={{   
                    duration: 1.2,
                    delay: 0.4,
                }}
            >
                -My Skills
            </motion.p>
            <motion.h2 className="text-5xl mb-10 " >
                Who am i<span className="text-[#b2ddd6]">?</span>
            </motion.h2>
            <div className="flex justify-center gap-8 relative min-h-[75vh]">
                <>
                    <motion.div
                        className="basis-5/12 relative h-auto  "
                        initial={{ scale: 1, x: "-10vw", opacity: 0 }}
                        transition={{ type: "spring" }}
                        viewport={{ once: false, amount: 0.4 }}
                        exit={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <Img3
                            imgSrc="/images/about2.jpg"
                            className="w-56 absolute top-1/4 left-0"
                        />
                        <Img3
                            imgSrc="/images/about1.jpg"
                            className="w-56 absolute bottom-8 right-0"
                        />
                        <Img3
                            imgSrc="/images/about3.jpg"
                            className="w-52 absolute top-0 right-7"
                        />
                    </motion.div>
                    <motion.div
                        className="flex-col basis-7/12 justify-center"
                        initial={{ scale: 1, x: "10vw", opacity: 0 }}
                        transition={{ type: "spring" }}
                        viewport={{ once: false, amount: 0.4 }}
                        exit={{ x: "-10vw", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    // {...rightAnimation}
                    >
                        <motion.h3 className="text-3xl mt-6 mb-2 font-semibold">
                            Reyno Nawfal Ghaisan
                        </motion.h3>
                        <p className=" leading-5">
                            Hi, i&apos;m Reyno Nawfal Ghaisan, a tech enthusiast and aspiring Web
                            Developer. I am currently studying at Smk 2 Purwakarta, West Java,
                            Indonesia, majoring in software engineering. My passion and curiosity
                            in the IT field are very big. Outside of the coding world, I find
                            myself deeply immersed in the design field, and the fascinating world
                            of AI. I believe that in today&apos;s fast-paced digital landscape,
                            being a lifelong learner is not only an option, but a necessity.
                            Let&apos;s continue to grow in this very fast era
                        </p>
                        <div className="hidden md:grid grid-cols-2 max-w-full gap-x-2 gap-y-0">
                            <ButtonSosmed
                                child={
                                    <>
                                        {" "}
                                        <FaInstagram className="text-2xl" /> Instagram{" "}
                                    </>
                                }
                                url="https://www.instagram.com/reyyn23/"
                                className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"
                            />
                            <ButtonSosmed
                                child={
                                    <>
                                        {" "}
                                        <FaGithub className="text-2xl" /> GitHub{" "}
                                    </>
                                }
                                url="https://www.instagram.com/reyyn23/"
                                className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"
                            />
                            <ButtonSosmed
                                child={
                                    <>
                                        {" "}
                                        <FaStackOverflow className="text-2xl" /> Stack Overflow{" "}
                                    </>
                                }
                                url="https://www.instagram.com/reyyn23/"
                                className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"
                            />
                            <ButtonSosmed
                                child={
                                    <>
                                        {" "}
                                        <FaDev className="text-2xl" /> Dev{" "}
                                    </>
                                }
                                url="https://www.instagram.com/reyyn23/"
                                className="basis-1/2 text-[#d9eeea] border-[#d9eeea] hover:bg-[#24292E] hover:text-[#d9eeea]"
                            />
                        </div>
                    </motion.div>
                </>
            </div>
        </motion.div>
    );
}


export default Home;

function Skills() {
    return (
        <div className="pb-52 z-10 relative bg-Az-920 pt-[5vh] ">
            <h2 className="text-7xl font-semibold text-center pt-8 ">
                Skills<span className="text-[#b2ddd6]">?</span>
            </h2>
            <p className="text-center text-[#b2ddd6]">
                Some skills that I have mastered to provide high quality solutions
            </p>
            <div className="flex justify-center gap-10 mt-8">
                <div className="flex flex-col w-40 gap-1 items-center">
                    <MdOutlineWeb size="3em" />
                    <p className="text-center font-bold text-[#b2ddd6]">
                        Front End Devoloper
                    </p>
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
            <h2 className="text-4xl font-semibold text-center mt-14 ">Details:</h2>
            <p className="text-center text-[#b2ddd6]">
                Details skills that I have mastered
            </p>
         
            {/* <TextHorizontal className="text-3xl font-bold mt-4">
                | HTML 
                | CSS 
                | Python
                | Javascript 
                | Bootstrap 
                | Tailwind 
                | React 
                | Jquery 
                | Php |
                Frammer</TextHorizontal> */}
            <div className="flex justify-around">
                <div className="flex flex-col pt-8 items-center justify-center gap-2 r-border">
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
                        <p className="hover:text-[#84c4bb] cursor-default ">
                            Visual Studio Code
                        </p>
                        <p className="hover:text-[#84c4bb] cursor-default ">Intelij</p>
                        <p className="hover:text-[#84c4bb] cursor-default ">Figma</p>
                        <p className="hover:text-[#84c4bb] cursor-default ">Canva</p>
                        <p className="hover:text-[#84c4bb] cursor-default ">Capcut</p>
                        <p className="hover:text-[#84c4bb] cursor-default ">
                            Adobe After Effect
                        </p>
                        <p className="hover:text-[#84c4bb] cursor-default ">
                            Adobe Photosop
                        </p>
                        <p className="hover:text-[#84c4bb] cursor-default ">Postman</p>
                        <p className="hover:text-[#84c4bb] cursor-default "></p>
                    </div>
                </div>
            </div>
        </div>
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
    );
}


function ButtonSosmed({ child, url, className }) {
    return (
        <button
            className={`btn btn-block btn-outline hover:border-none mt-5 text-xl rounded-xl transition-all ${className}`}
            onClick={() => {
                window.open("https://www.instagram.com/reyyn23/");
            }}
        >
            {child}
        </button>
    );
}

function Experience() {
    return (
        <div className="px-8 bg-Az-920">
            <motion.h2
                className="text-7xl text-center pt-8 mb-10"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                Experience<span className="text-[#b2ddd6]">?</span>
            </motion.h2>
            <motion.ul
                className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2024</time>
                        <div className="text-lg font-black">E-sports Coach dan Leader</div>
                        Memimpin dan melatih tim e-sports di tingkat sekolah, dengan fokus
                        pada game Mobile Legends. Mengorganisasi sesi pelatihan mingguan,
                        menyusun strategi untuk kompetisi, dan mengembangkan potensi pemain
                        untuk mencapai kemenangan dalam turnamen lokal. Berhasil menciptakan
                        kombinasi tim yang kuat melalui evaluasi berbasis pertandingan
                        internal.
                    </div>
                    <hr className="bg-[#84c4bb]" />
                </li>
                <div className="min-h-16"></div>
                {/* <li>
                    <hr className="bg-[#84c4bb]" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2025</time>
                        <div className="text-lg font-black">
                            Goggle Maneger Website Authizor
                        </div>
                        Bekerja di goggle sebagai maneger website authizor
                    </div>
                </li> */}
            </motion.ul>
        </div>
    );
}



function KataKata() {
    const text =
        "Life must be lived forward, but it only makes sense if lived backwards.".split(
            " "
        );
    return (
        <div className="min-h-[90vh] flex justify-center items-center font-['Poppins']">
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
        </div>
    );
}
