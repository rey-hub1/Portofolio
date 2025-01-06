import HeroSplit from "../Components/hero/HeroSplit";
import Hero from "../Components/hero/Hero";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        // Tambahkan class ke elemen body
        document.body.classList.add("overflow-y-hidden");

        // Bersihkan class saat komponen dilepas
        return () => {
            document.body.classList.remove("overflow-y-hidden");
        };
    }, []);


    return (
        <div className="scroll-container overflow-y-hidden">

            <Hero
                className="Sroll-section"
            />
            <HeroSplit
                className="Sroll-section"
                title="About Me"
                description="Simple introduction of me"
                linkText="Learn More"
                linkTo="/about#who"
                imageSrc="/images/aboutme.jpg"
            />

            <HeroSplit
                className="Sroll-section"
                title="My Projects"
                description="Learn more about our values and goals."
                linkText="Discover"
                linkTo="/contact"
                imageSrc="/images/mission.jpg"

            />
           <div className="min-h-[100vh] Scroll-section">

           </div>
        </div>
    )
}
export default Home