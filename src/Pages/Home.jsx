// import { Footer } from './Footer';
// import Footer from '@components/Footer';



import { FiPenTool } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import TextAnimateHuruf from "../utils/TextAnimateHuruf";
import TextAnimateKata from "../utils/TextAnimateKata";
import Lengket from "../utils/Lengket";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
// import Lenis from "lenis";
import Lenis from '@studio-freight/lenis'
import { Button } from "../Components/Button/Button";



export default function PageIndex() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Hancurkan instance Lenis saat unmount
        };
    }, []);
    return (
        <div className="text-Az-100 relative  min-w-[100vw]">
            {/* SECTION 1 */}
            <Section1 />
            {/* SECTION 2 */}
            <Section2 />
            {/* SECTION 3 */}
            <Section3 />
            {/* <Footer /> */}
        </div>
    )
}

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-Az-950 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-[170px] md:w-[280px]">
            <div className="flex items-center justify-center rounded-full p-6 bg-[#1E2A2F] mb-4">
                {icon}
            </div>
            <h2 className="text-base font-semibold mb-2">{title}</h2>
            <p className="text-gray-300 text-xs">{description}</p>
        </div>
    );
};


const ProjectCard = () => {
    return (
        <div className="bg-gradient-to-br from-[#78D5D7] to-[#50C4C8] w-full h-64 rounded-lg shadow-lg"></div>
    );
};



const Section1 = () => {
    return (
        <div className="flex relative items-center content-center justify-center min-h-[75vh] min-w-[100vw] pt-[1vh] pb-1 px-[4vw] md:px-0 ">
            <div className="absolute z-0 md:relative md:opacity-100 opacity-40 w-[75vh] left-[0.1vw] md:w-[140vw] h-auto bottom-0 md:block">
                {/* Gambar */}
                <img src="/images/v2/HomeTop.png" className="inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            {/* <img src="/images/v2/HomeTop.png" /> */}
            <div className="flex flex-col gap-2 mr-[8vw] mb-16 md:mb-1 z-10">
                <h2 className="text-4xl tracking-wider">Hello!</h2>
                <h2 className="text-4xl tracking-wider ">I’m Reyno Nawfal Ghaisan</h2>
                <p>A Software Engineering student passionate about tech, AI, and business. I love building websites, exploring AI, and creating random YouTube content. Always learning, always innovating.</p>
                <div className="flex gap-4 w-full mt-1">
                    <Button  className="">Contact Me</Button>
                    <Button  variant=" outline" className="" cv="true">Dowload CV</Button>
                </div>
            </div>
        </div>);
}

function Section2() {
    // Ref dan Scroll untuk Bagian Pertama
    const ref1 = useRef(null);
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["0 1", "end start"],
    });


    const bgY1 = useTransform(scrollYProgress1, [0, 1], ["0", "-40%"]);

    // Inview
    const fadeInAnim = {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }
    const fadeInLeftAnim = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }
    return (
        <motion.div
            ref={ref1}
            key="section2"
            style={{ y: bgY1 }}
            className="relative flex flex-col lg:flex-row min-h-[100vh] bg-Az-920 items-center justify-center gap-[10vw] lg:justify-between lg:gap-[3vw] px-[8vw] pt-10 -mb-40"
        >
            {/* Button di atas gambar */}
            <button className="hidden md:block absolute z-10 text-2xl -top-5 -left-2 bg-[#2C4E48] text-white px-7 py-3 rounded-lg shadow-md font-semibold">
                Reyno Nawfal Ghaisan
            </button>
            {
                /* KIRI / atas */
            }
            <div className="flex flex-row lg:flex-col ">
                <div className="flex flex-row lg:flex-col gap-4">
                <motion.div
                    variants={fadeInLeftAnim}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    <Card icon={<FiPenTool className="w-7 h-7" />} title="Design" description="I craft intuitive and visually appealing designs that focus on user experience." />
                </motion.div>
                <motion.div
                    variants={fadeInLeftAnim}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ amount: 0.7, once: true }}
                >

                        <Card icon={<IoCodeSlash className="w-7 h-7" />} title="Website Developer" description="I build responsive and user-friendly websites, with clean code with great design." />
                </motion.div>
                </div>

            </div>

            {
                /* KANAN / Bawah */
            }
            <div className="text-white flex flex-col justify-center h-full mb-[8vh]">
                <motion.p
                    className="text-Az-300 text-sm mb-1"
                    variants={fadeInAnim}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 1.2, delay: 0.4 }}
                >-My Skills</motion.p>
                {/* <h2 className="text-4xl font-bold mb-1">
                WHY SHOULD <span className="text-Az-200">ME?</span>
            </h2> */}
                <TextAnimateHuruf className="text-4xl font-bold mb-1" >WHY SHOULD </TextAnimateHuruf>
                <TextAnimateKata className="leading-3 mb-3 " >I&apos;m not just a developer—I&apos;m a creative problem solver who loves
                    exploring AI, web development, and business. I combine technical skills
                    with a strategic mindset, always looking for ways to create impactful
                    and innovative solutions. Beyond coding, I enjoy making engaging content
                    and continuously learning to stay ahead in the ever-evolving tech world.
                    Let&apos;s build something great together!</TextAnimateKata>

                {/* <p className="text-gray-400 text-sm mb-6">
                I&apos;m not just a developer—I&apos;m a creative problem solver who loves
                exploring AI, web development, and business. I combine technical skills
                with a strategic mindset, always looking for ways to create impactful
                and innovative solutions. Beyond coding, I enjoy making engaging content
                and continuously learning to stay ahead in the ever-evolving tech world.
                Let&apos;s build something great together!
            </p> */}
                <Lengket className="mt-[1vw] w-fit">
                    <Button  variant="" className="" >Learn More About Me</Button>
                </Lengket>
            </div>
        </motion.div>);
}
const Section3 = () => {
    return (
        <div className="px-[8vw] w-screen bg-Az-950 pb-[30vh]">
            {/* Title */}
            <div className="mb-6">
                <p className="text-Az-300 text-sm">My Projects</p>
                <h2 className="text-4xl font-bold">My Recent <span className="text-Az-100">Works</span> </h2>
            </div>

            {/* Grid Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard />
                <ProjectCard />
            </div>

            {/* See All Button */}
            <div className="mt-6 text-right">
                <a href="#" className="text-white font-semibold hover:underline">
                    See All →
                </a>
            </div>
        </div>
    );
};