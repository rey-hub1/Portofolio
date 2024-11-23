import { motion } from "motion/react"


// eslint-disable-next-line react/prop-types
export default function Hero({className=""}) {
    return (
        <div className={`hero min-h-[90vh] relative ${className}`} >
            {/* Gambar Hero */}
            <img
                src="/images/porshe.jpeg"
                alt="Hero Image"
                className="absolute top-0 left-0 h-5/6 sm:h-full w-full object-cover opacity-15"
            />
            {/* Overlay Transparan */}
            <div className="absolute top-0 left-0 h-full w-full bg-opacity-60"></div>
            {/* Konten Hero */}
            <div className="hero-content text-neutral-content text-center relative z-10">
                <motion.div
                    className="max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1
                        className="mb-5 font-black text-6xl sm:text-8xl font-['CrimsonText']"
                    >
                        REYNO</h1>
                    <p className="mb-5 sm:text-base text-sm font-['Playfair']">
                        An enthusiastic learner who is passionate about technology and innovation. Always trying to turn ideas into impactful and useful solutions.
                    </p>
                    <div className="flex justify-center gap-2">
                        <button className="btn bg-[#264948]">Download CV</button>
                        <button className="btn btn-outline">Contact Me</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}