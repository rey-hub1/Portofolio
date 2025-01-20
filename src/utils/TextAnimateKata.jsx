import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function TextAnimateKata({ classname, children = "Lorem ipsumdwawd dolor sit amet consectetur, adipisicing elit. Tempora, fuga ipsum et quod atque maxime quibusdam? Veritatis rerum maiores tenetur possimus quae odit itaque ipsam nemo neque. Soluta, nihil laudantium!" }) {
    return (
        <div className={classname}>
            {/* <div className="h-screen"></div> */}
            <Paragraft value={children} />
            {/* <div className="h-screen"></div> */}
        </div>
    )
}
function Paragraft({ value }) {
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.95", "start 0.7"]
    })
    // useEffect(() => {
    //     scrollYProgress.onChange((latest) => console.log(latest))
    // })
    const words = value.split(" ")
    return (
        <motion.p
            ref={element}
            className="m-w-[1200px] gap-1 flex flex-wrap leading-none"
            style={{ opacity: scrollYProgress }}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    console.log([start, end])
                    return <Word range={[start, end]} progress={scrollYProgress} className="mr-1 " key={i}>{word} </Word>
                })
            }
        </motion.p>
    );
}
const Word = ({ children, range, progress, className }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <div className="relative">
            <span className="opacity-[0.1] absolute mr-1" >{children}</span>

            <motion.span
                style={{ opacity: opacity }}
                className={className} >{children}</motion.span>
        </div>
    )
}
