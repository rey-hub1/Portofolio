// import { Footer } from './Footer';
// import Footer from '@components/Footer';


/* eslint-disable react/prop-types */

import { FiPenTool } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";


export default function PageIndex() {
    return (
        <div className="text-Az-100">
            {/* SECTION 1 */}
            <Section1 className={"flex items-center content-center justify-center"} />
            {/* SECTION 2 */}
            <Section2 />
            {/* SECTION 3 */}
            <Section3 />

            {/* <Footer /> */}
        </div>
    )
}

const Card = ({ icon, title, description }) => {
    return (
        <div className="bg-Az-950 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-[300px] md:w-[330px]">
            <div className="flex items-center justify-center rounded-full p-6 bg-[#1E2A2F] mb-4">
                {icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );
};


const ProjectCard = () => {
    return (
        <div className="bg-gradient-to-br from-[#78D5D7] to-[#50C4C8] w-full h-64 rounded-lg shadow-lg"></div>
    );
};



const Button = ({ text, variant, className }) => {
    const baseClasses =
        "px-6 py-2 rounded-lg shadow-md transition font-semibold";

    const solidClasses = "bg-Az-700 text-Az-100 hover:bg-[#345A54]";
    const outlineClasses =
        "border border-Az-100 text-Az-100 bg-transparent hover:bg-[#2C4E48] hover:text-white";

    return (
        <button
            className={`${baseClasses} ${variant === "outline" ? outlineClasses : solidClasses} ${className}`}
        >
            {text}
        </button>
    );
};


const Section1 = ({className}) => {
    return <div className= {className}>
        <div className="relative w-[90vw] h-auto">
            {/* Gambar */}
            <img src="/images/v2/HomeTop.png" className="w-full h-full object-cover rounded-lg" />

            {/* Button di atas gambar */}
            <button className="absolute text-2xl -bottom-5 -left-2 bg-[#2C4E48] text-white px-7 py-3 rounded-lg shadow-md font-semibold">
                Reyno Nawfal Ghaisan
            </button>
        </div>
        {/* <img src="/images/v2/HomeTop.png" /> */}
        <div className="flex flex-col gap-2 mr-[8vw] ">
            <h2 className="text-5xl tracking-wider">Hello!</h2>
            <h2 className="text-4xl tracking-wider">I’m Reyno Nawfal Ghaisan</h2>
            <p>A Software Engineering student passionate about tech, AI, and business. I love building websites, exploring AI, and creating random YouTube content. Always learning, always innovating.</p>
            <div className="flex gap-4 w-full">
                <Button text="Contact Me" className="w-2/6" />
                <Button text="Dowload CV" variant="outline" className="w-2/5" />
            </div>
        </div>
    </div>;
}

function Section2() {
    return (<div className="flex min-h-screen bg-Az-920 items-center justify-between gap-[5vw] px-[8vw] pt-20">
        {
            /* KIRI */
        }
        <div className="flex flex-col gap-6">
            <Card icon={<FiPenTool size={40} />} title="Design" description="I craft intuitive and visually appealing designs that focus on user experience." />
            <Card icon={<IoCodeSlash size={40} />} title="Website Developer" description="I build responsive and user-friendly websites, combining clean code with great design to ." />

        </div>

        {
            /* KANAN - Buat Vertical Center */
        }
        <div className="text-white flex flex-col justify-center h-full">
            <p className="text-Az-300 text-sm mb-1">-My Skills</p>
            <h2 className="text-4xl font-bold mb-4">
                WHY SHOULD <span className="text-Az-200">ME?</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
                I&apos;m not just a developer—I&apos;m a creative problem solver who loves
                exploring AI, web development, and business. I combine technical skills
                with a strategic mindset, always looking for ways to create impactful
                and innovative solutions. Beyond coding, I enjoy making engaging content
                and continuously learning to stay ahead in the ever-evolving tech world.
                Let&apos;s build something great together!
            </p>
            <Button text="Learn More About Me" variant="" className="w-2/6" />

        </div>
    </div>);
}
const Section3 = () => {
    return (
        <div className="px-[8vw] w-screen bg-Az-920 pb-[30vh]">
            {/* Title */}
            <div className="mb-6">
                <p className="text-Az-300 text-sm">My Projects</p>
                <h2 className="text-4xl font-bold">My Recent <span className="text-Az-100">Works</span> </h2>
            </div>

            {/* Grid Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard />
                <ProjectCard />
            </div>

            {/* See All Button */}
            <div className="mt-6 text-right">
                <a href="#" className="text-white font-semibold hover:underline">
                    See All →
                </a>
            </div>
        </div>
    );
};