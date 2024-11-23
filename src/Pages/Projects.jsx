// import { motion } from "motion/react"
// import About from "../Components/Home/About"
import { motion } from "motion/react";

export default function Projects() {
    return (
        <>
            <motion.h1
            className="text-7xl text-center "
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0 , opacity: 1 }}
            transition={{delay:1, duration: 1}}
            >WOI</motion.h1>
        </>


    )
}