/* eslint-disable react/prop-types */

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextAnimateHuruf({ children = "A Software Engineering student passionate about tech, AI, and business. I love building websites, exploring AI, and creating random YouTube content. Always learning, always innovating.", className = "" }) {

    return (
        <div>
            {/* <div className="h-screen"></div> */}
            <Paragraft className={className} text={children} />
            {/* <div className="h-screen"></div> */}
        </div>
    )

}
function Paragraft({ text, className }) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start end", "start 0.45"]
    });


    const words = text.split(" ")
    return (
        <motion.p
            ref={element} className={` max-w-[820px] flex flex-wrap  ${className}`}
            style={{ opacity: scrollYProgress }}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length)
                    // console.log([start, end])
                    return <Word key={i} range={[start, end]} progress={scrollYProgress} >{word}</Word>
                })
            }
        </motion.p>
    )
}

const Word = ({ children, range, progress }) => {
    const char = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;
    return (
        <span className="mr-2 mt-2">
            {
                char.map((char, i) => {
                    const start = range[0] + step * i;
                    const end = range[0] + step * (i + 1);
                    return <Character key={i} range={[start, end]} progress={progress} >{char}</Character>
                })
            }
        </span>
    )
}
const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <>
            <span className="opacity-[0.2] absolute" >{children}</span>
            <motion.span
                style={{ opacity }}>
                {children}
            </motion.span>
        </>
    )
}