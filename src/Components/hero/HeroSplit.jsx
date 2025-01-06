/* eslint-disable react/prop-types */
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const About = ({
    children =null,
    title = "Title",
    className = "",
    description = "Description",
    linkText = "Learn More",
    linkTo = "/",
    imageSrc = "",
    leftAnimation = {
        hidden: { x: "-10vw", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", stiffness: 100, damping: 9 },
        },
    },
    rightAnimation = {
        hidden: { x: "10vw", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", stiffness: 100, damping: 9, delay: 0.2 },
        },
    },
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, transition: { duration: 1.8, ease: "easeOut" } },
        visible: { opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
    };

    return (
        <motion.div
            className={`min-h-[80vh] flex justify-around items-center gap-10 ${className}`}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Konten kiri */}
            <motion.div className="flex flex-col gap-2 " variants={leftAnimation}>
                <h2 className="text-7xl">{title}</h2>
                <p className="">{description}</p>
                <Link to={linkTo} className="btn bg-[#264948] w-40 rounded-xl">
                    {linkText}
                </Link>
                {children && <div>{children}</div>}
            </motion.div>

            {/* Konten kanan */}
            <motion.div variants={rightAnimation} >
                {imageSrc && (
                    <motion.img
                        src={imageSrc}
                        className="aspect-square w-72 h-72"
                        alt=""
                        initial={{ scale: 1, borderRadius: 20, filter: "blur(2px)" }}
                        whileHover={{ scale: 1.05, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}

                    />
                )}
            </motion.div>
        </motion.div>
    );
};

export default About;
