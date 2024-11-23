// import { motion } from "motion/react"
import { FaInstagram } from "react-icons/fa"
import HeroSplit from "../Components/hero/HeroSplit"

export default function Home() {
    return (
        <>
            <HeroSplit
                title="About Me"
                description="Simple introduction of me"
                linkText="Learn More"
                linkTo="/about"
                imageSrc="/images/aboutme.jpg"
            />
            <>
                <h2 className="text-7xl text-center -mt-8">WHO AM I</h2>
                <div className="flex justify-center gap-10">
                    <div className="basis-5/12">
                        <img src="/images/porshe.jpeg" alt="" />
                    </div>
                    <div className="basis-5/12">
                        <h3>Reyno Nawfal Ghaisan</h3>
                        <p className="text-justify">Hai, Reyno Nawfal Ghaisan, seorang penggemar teknologi dan calon Pengembang Web.
                            570 / 5.000
                            Hi, Reyno Nawfal Ghaisan, a tech enthusiast and aspiring Web Developer. I am currently studying at Smk 2 Purwakarta, West Java, Indonesia, majoring in software engineering. My passion and curiosity in the IT field are very big. Outside of the coding world, I find myself deeply immersed in the design field, and the fascinating world of AI. I believe that in today&apos;s fast-paced digital landscape, being a lifelong learner is not only an option, but a necessity. Let&apos;s continue to grow in this very fast era</p>
                    <button className="btn btn-block btn-outline mt-5 color-[#DD2A7B]">
                        <FaInstagram size="1.6em"/>
                        Instagram
                    </button>
                    </div>
                </div>
            </>
        </>


    )
}