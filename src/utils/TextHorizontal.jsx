import { useScroll, useTransform, motion } from "framer-motion"
import Lenis from "lenis"
import { useEffect, useRef } from "react"

export default function TextHorizontal({ children, className }) {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    return (
        <div className={`overflow-hidden ${className}`}>
            <div>
                <Slider left="-20vw" progress={scrollYProgress} direction="left" >{children}</Slider>
                {/* <Slider left="-10vw" progress={scrollYProgress} direction="right" /> */}
            </div>
        </div>
    )


    function Slider({ left, progress, direction, children }) {
        const dir = direction === "left" ? -1 : 1;
        const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
        return (
            <motion.div style={{ left, x }} className="relative flex whitespace-nowrap gap-1">
                <Phrase  >{children}</Phrase>
                <Phrase  >{children}</Phrase>
                <Phrase  >{children}</Phrase>
                <Phrase  >{children}</Phrase>
                <Phrase  >{children}</Phrase>
            </motion.div>
        )
    }
    function Phrase({children}) {
        return (<div className="flex  items-center">
            <p className=" "> {children}</p>
        </div>);
    }
}

