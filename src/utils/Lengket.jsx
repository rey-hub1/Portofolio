import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Lengket({ children, className }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();

        // 🔹 Koreksi posisi agar lebih natural dan mengikuti bentuk persegi panjang
        const x = (clientX - (left + width / 2)) * 0.6; // Kurangi efek kecepatan agar smooth
        const y = (clientY - (top + height / 2)) * 1.2;

        setPosition({ x, y });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 80, damping: 12, mass: 0.3 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
