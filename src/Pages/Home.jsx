import About from "../Components/Home/About";
import Hero from "../Components/Home/hero";

export default function Home() {


    return (
        <div className="font-['Playfair'] scroll-container">

            <Hero
                className="section"
            />
            <About
                className="section"
                title="About Me"
                description="Simple introduction of me"
                linkText="Learn More"
                linkTo="/about"
                imageSrc="/images/aboutme.jpg"
            />

            <About
                className="section"
                title="My Projects"
                description="Learn more about our values and goals."
                linkText="Discover"
                linkTo="/mission"
                imageSrc="/images/mission.jpg"

            />

        </div>
    )
}