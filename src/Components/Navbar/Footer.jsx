// import React from "react";
import { Button } from "../Button/Button";

export default function Footer() {
  return <footer className="relative bg-[#081517] text-gray-300 pb-4 pt-[1px]">

    {
      /* Contact Section */
    }
    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] bg-[#0D1B1E] p-10 pt-14 rounded-xl shadow-lg text-center">
      {
        /* Decorative Circles */
      }
        <div className="absolute bottom-0 right-0 z-0">
        <svg
          width={60}  // Setengah dari 119
          height={57} // Setengah dari 114
          viewBox="0 0 119 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.7734 0.0106125C31.6862 0.0106125 -0.000137329 31.697 -0.000137329 70.7841C-0.000137329 87.056 5.49126 102.045 14.7219 114H93C107.359 114 119 102.359 119 88V18.9853C106.361 7.21271 89.4083 0.0106125 70.7734 0.0106125Z"
            fill="url(#paint0_linear_337_255)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_337_255"
              x1="-2.50653e-06"
              y1="146.568"
              x2="181.631"
              y2="32.5788"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AA79F" />
              <stop offset={1} stopColor="#B2DDD6" />
            </linearGradient>
          </defs>
        </svg>


        </div>
        <div className="absolute top-0 left-0 z-0">
        <svg
          width={65}
          height={61}
          viewBox="0 0 95 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.5 91C69.7041 91 95 65.7041 95 34.5C95 21.5099 90.6162 9.54361 83.2472 0H26C11.6406 0 0 11.6406 0 26V75.8524C10.0899 85.2505 23.6235 91 38.5 91Z"
            fill="url(#paint0_linear_337_252)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_337_252"
              x1={95}
              y1={-26}
              x2={-50}
              y2={65}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AA79F" />
              <stop offset={1} stopColor="#B2DDD6" />
            </linearGradient>
          </defs>
        </svg>
</div> 

      {
        /* Content */
        
      }
      
      <h2 className="relative text-2xl md:text-2xl font-bold text-white z-10">
        Let’s build something awesome together!
      </h2>
      <p className="text-md text-gray-400 mt-2">Reach out if you have a project in mind.</p>
      <Button className="mt-3">Contact Me</Button>

      {
        /* Contact Button */
      }
      {/* <Button text="Learn More About Me" variant="" className="w-2/6 mt-6" /> */}


    </div>

    {
      /* Footer Bottom */
    }
    <div className="container mx-auto flex flex-col justify-between items-center mt-52 border-t-[1px] border-Az-920">
      {
        /* Top*/
      }
      <nav className="flex space-x-6 m-4 ">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Projects</a>
        <a href="#" className="hover:text-white transition">About Me</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>
      {
        /* Buttom - Copyright */
      }
      <div className="flex flex-row justify-between w-full  text-xs text-Az-600 px-[8vw] ">
        <p> Development By: <span className="text-teal-400">Reyno Nawfal Ghaisan</span></p>
        <p>&copy; 2024 Reyno Nawfal Ghaisan</p>
      </div>
    </div>
  </footer>;
}
