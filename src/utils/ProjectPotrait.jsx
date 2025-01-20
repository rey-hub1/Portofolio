/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../styles/Testing.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis'


const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
]

const useDimensions = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const updateDimensions = useCallback(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, [updateDimensions]);

    return dimension;
};

const ProjectPotrait = () => {
    const container = useRef(null);
    const { height } = useDimensions()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={container} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y1} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[5], images[1], images[2]]} y={y3} />
                <Column images={[images[3], images[4], images[5]]} y={y4} />
            </div>
            <div className={styles.spacer}></div>
        </main>
    );
}

function Column({ images, y = 0 }) {
    return (
        <motion.div
            style={{ y }}
            className={styles.column}>
            {images.map((src, index) => {
                return <div key={index} className={styles.imageContainer}>
                    <img src={"/images/Poster/" + src} alt="image" />
                </div>;
            })}
        </motion.div>);
}
export default ProjectPotrait;

// export default function Testing() {
//     return (
//         <div>
//             <h1>Testing</h1>
//         </div>
//     )
// }