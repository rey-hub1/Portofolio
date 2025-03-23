import { motion } from "motion/react"
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function Hero({ className = "" }) {
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
            <div className="hero-content text-neutral-content text-center  relative z-10">
                <motion.div
                    className="max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1
                        className="mb-5 font-black text-center text-6xl sm:text-8xl "
                    >
                        REYNO</h1>
                    <p className="mb-5 mx-auto items-center justify-center sm:text-base text-justify md:text-center md:w-full w-11/12  text-sm font-['Poppins']">
                        An enthusiastic learner who is passionate about technology and innovation. Always trying to turn ideas into impactful and useful solutions.
                    </p>
                    <div className="flex justify-evenly md:justify-center gap-2">

                        <button
                            className="relative btn bg-[#264948] text-white px-6 py-2 rounded-md"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/file/cv_contoh.pdf';  // Ganti dengan path file CV
                                link.download = 'cv_contoh.pdf'; // Nama file yang akan diunduh
                                link.click();  // Memulai download
                            }}
                        >
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#b2ddd6] animate-ping opacity-75"></span>
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#b2ddd6]"></span>
                            <span className="relative">Download CV</span>
                        </button>
                        <Link to="/contact" className="btn btn-outline rounded-md">Contact Me</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}