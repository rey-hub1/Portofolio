/* eslint-disable react/prop-types */
import HeroSplit from "../Components/hero/HeroSplit";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
// import { SiSpacex } from "react-icons/si";
import { useEffect, useRef } from "react";
import { BsBraces } from "react-icons/bs";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SmoothScrollHero = () => {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'auto';

        return () => {
            document.documentElement.style.scrollBehavior = ''; // Reset ketika meninggalkan halaman
        };
    }, []);
    return (
        <>

            <div className="bg-[#0b1919]"
            >
                <ReactLenis
                    root
                    options={{
                        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
                        lerp: 0.05,
                        //   infinite: true,
                        //   syncTouch: true,
                    }}
                >
                    {/* <Nav /> */}
                    <Hero />
                    <Schedule />
                </ReactLenis>
            </div>
            <motion.div
                className="bawah"
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
            >
                <h3 className="text-4xl text-center">WANT TO COLABATE</h3>
                <p
                    className="text-center text-md mt-2 text-[#b2ddd6]"
                >
                    Tertarik untuk berkolaborasi atau mengeksplorasi peluang bisnis? <br />Ayo, mari kita ciptakan sesuatu yang luar biasa bersama!
                </p>
            </motion.div>
            <HeroSplit
                className=""
                title="About Me"
                description="I&apos;m free just contact me if you need"
                linkText="Contact Me"
                linkTo="/contact"
                imageSrc="/images/aboutme.jpg"
            >
                <div className="mt-5 flex items-center justify-between">
                    <a
                        href="https://github.com/rey-hub1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaGithub className="h-8 w-8" />
                    </a>
                    <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaInstagram className="h-8 w-8" />
                    </a>
                    <a
                        href="https://github.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        <FaWhatsapp className="h-8 w-8" />
                    </a>
                </div>
            </HeroSplit>
        </>

    );
};

// const Nav = () => {
//     return (
//         <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
//             <SiSpacex className="text-3xl mix-blend-difference" />
//             <button
//                 onClick={() => {
//                     document.getElementById("launch-schedule")?.scrollIntoView({
//                         behavior: "smooth",
//                     });
//                 }}
//                 className="flex items-center gap-1 text-xs text-zinc-400"
//             >
//                 LAUNCH SCHEDULE <FiArrowRight />
//             </button>
//         </nav>
//     );
// };

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage />

            <ParallaxImages />

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["105%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="sticky top-0 h-screen w-screen  "
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage:
                    "url(/images/galaxy2.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <ParallaxImg
                src="/images/projek1.png"
                alt="And example of a space launch"
                start={-200}
                end={200}
                className="w-1/3"
            />
            <ParallaxImg
                src="/images/projek1.png"
                alt="An example of a space launch"
                start={200}
                end={-250}
                className="mx-auto w-2/3"
            />
            <ParallaxImg
                src="/images/projek1.png"
                alt="Orbiting satellite"
                start={-200}
                end={200}
                className="ml-auto w-1/3"
            />
            <ParallaxImg
                src="/images/projek1.png"
                start={0}
                end={-500}
                className="ml-24 w-5/12"
                alt="Orbiting satellite"
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        />
    );
};

const Schedule = () => {
    return (
        <section
            id="launch-schedule"
            className="mx-auto max-w-5xl px-4 py-48 text-white"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-zinc-50"
            >
                More Details
            </motion.h1>
            <ScheduleItem title="Web SMKN 2 PURWAKARTA" date="React | Next.js | TailwindCSS" location="PROJECTS" />
            <ScheduleItem title="Web REZA" date="HTML | CSS | Javascript" location="PROJECTS" />

        </section>
    );
};

const ScheduleItem = ({ title, date, location }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className={`mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9 cursor-[url('/images/aboutme.jpg'), auto]`}
        >
            <div>
                <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
                <p className="text-sm uppercase text-zinc-500">{date}</p>
            </div>

            <div className="flex flex-col items-center justify-center ">
                <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
                    <p>{location}</p>
                    <BsBraces />
                </div>
                <a href="https://daisyui.com/components/button/" className="ml-auto">
                    <FaGithub className="ml-auto w-5 h-5" href="https://daisyui.com/components/button/" />
                </a>
            </div>
        </motion.div>
    );
};

export default SmoothScrollHero