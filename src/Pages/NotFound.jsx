import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { time } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

function NotFound() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    // Ref dan Scroll untuk Bagian Pertama
    const ref1 = useRef(null);
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["start start", "end start"],
    });

    const bgY1 = useTransform(scrollYProgress1, [0, 1], ["0%", "100%"]);
    const textY1 = useTransform(scrollYProgress1, [0, 1], ["0%", "150%"]);

    // Ref dan Scroll untuk Bagian Kedua
    // const ref2 = useRef(null);
    // const { scrollYProgress: scrollYProgress2 } = useScroll({
    //     target: ref2,
    //     offset: ["start start", "end start"],
    // });

    // const bgY2 = useTransform(scrollYProgress2, [0, 1], ["0%", "100%"]);
    // const textY2 = useTransform(scrollYProgress2, [0, 1], ["0%", "200%"]);

    return (
        <div className=" bg-[#0B0B0D]">
            {/* Bagian 1 */}
            <div ref={ref1} className="w-full h-screen overflow-hidden relative grid place-items-center">
                <motion.h1
                    className="absolute inset-0 flex items-center justify-center font-bold text-Az-50 text-7xl md:text-9xl z-10"
                    style={{ y: textY1 }}
                >
                    REY
                </motion.h1>

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/images/v2/Mountain.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: bgY1,
                    }}
                />
                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: `url(/images/v2/Mountainbg.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />

                <div>
                    <p className="p-24 mt-[90vh]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci mollitia, fuga veritatis necessitatibus amet numquam dolore commodi vero iure perspiciatis fugiat magnam quidem velit est. Illo dolorum aut eveniet.
                    </p>
                </div>
            </div>

            {/* Bagian 2 */}
            {/* <div ref={ref2} className="w-full h-screen overflow-hidden relative grid place-items-center">
                <motion.h1
                    className="absolute inset-0 flex items-center justify-center font-bold text-Az-50 text-7xl md:text-9xl z-10"
                    style={{ y: textY2 }}
                >
                    PARALAX
                </motion.h1>

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/images/v2/Mountain.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: bgY2,
                    }}
                />
                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: `url(/images/v2/Mountainbg.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />

                <div>
                    <p className="p-24 mt-[90vh]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci mollitia, fuga veritatis necessitatibus amet numquam dolore commodi vero iure perspiciatis fugiat magnam quidem velit est. Illo dolorum aut eveniet.
                    </p>
                </div>
            </div> */}
            <p className="p-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At maxime repudiandae blanditiis, vitae dolor magnam qui quae ut odit soluta tenetur assumenda consectetur laudantium explicabo maiores repellendus, hic, molestiae reprehenderit.
                Soluta asperiores quas minima dolores exercitationem, esse aut commodi sequi ut magnam reprehenderit sit unde aliquid vel assumenda officia eius cumque culpa ea? Excepturi fuga et ratione, consectetur odit accusantium.
                Sit iste quas voluptas, placeat, laboriosam dolorum at hic sed, corporis nesciunt eos culpa ducimus deserunt. Incidunt illum numquam hic enim rerum voluptatibus distinctio in totam, necessitatibus suscipit? Ab, voluptatibus?
                Ullam quo aliquam inventore et commodi dignissimos delectus quisquam labore sequi cum. Quia officiis autem iste natus laboriosam, harum, dolor quasi dolores, corporis provident cumque et. Pariatur, autem odit? Quaerat!
                Voluptatibus voluptates explicabo aliquid nemo fugit, molestias aliquam facere iure, saepe, eum labore beatae. Animi nobis at magni saepe. Atque ab amet iure, voluptatum cum vitae magnam earum omnis officiis!
                Saepe excepturi maiores quia ea ipsam quos dolor. Aliquam veritatis, aperiam quia dicta excepturi explicabo quasi labore corrupti sequi, numquam, minima natus obcaecati expedita adipisci? Omnis nulla iure voluptatibus fugit.
                Est neque illum suscipit dolorum, impedit, repellat molestias, quam voluptates magni facilis eos obcaecati asperiores sint. Quasi, laudantium quo tempora odit eum quae quaerat possimus! Harum quam enim quibusdam tempore?
                Magni quaerat, minima aut maiores nesciunt fuga. Distinctio quos veniam, impedit quaerat nesciunt doloribus illo laudantium tempora, porro dolorem expedita id sequi modi optio similique! Laudantium vitae recusandae et nemo.
                Unde eaque vitae possimus odit accusamus pariatur architecto voluptates nihil, aut perferendis. Cum fugiat soluta suscipit? Magni, corrupti. Id, recusandae eum. Reprehenderit modi quidem culpa facere dolorum ullam aspernatur quos!
                Molestias omnis facilis aspernatur repellat possimus dolores magnam odit voluptates unde reprehenderit vitae amet consequatur dolorem similique quasi illum veniam, voluptatibus neque praesentium. Iure doloribus alias quia? Optio, expedita perferendis!</p>
        </div>
    );
}

export default NotFound;
