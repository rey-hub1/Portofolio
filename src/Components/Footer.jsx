// import React from "react";

export default function Footer() {
  return <footer className="relative bg-[#081517] text-gray-300 pb-10 pt-[1px]">
    {
      /* Contact Section */
    }
    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] bg-[#0D1B1E] p-10 rounded-xl shadow-lg text-center">
      {
        /* Decorative Circles */
      }
      {
        /* <div className="absolute top-0 left-0 w-16 h-16 bg-[#50C4C8] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#50C4C8] rounded-full"></div> */
      }

      {
        /* Content */
      }
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Let’s build something awesome together!
      </h2>
      <p className="text-gray-400 mt-2">Reach out if you have a project in mind.</p>

      {
        /* Contact Button */
      }
      {/* <Button text="Learn More About Me" variant="" className="w-2/6 mt-6" /> */}


    </div>

    {
      /* Footer Bottom */
    }
    <div className="container mx-auto flex flex-col justify-between items-center mt-32 border-t-[1px] border-Az-920">
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
      <div className="flex flex-row justify-between w-full px-[9vw] text-sm text-Az-600   ">
        <p> Development By: <span className="text-teal-400">Reyno Nawfal Ghaisan</span></p>
        <p>&copy; 2024 Reyno Nawfal Ghaisan</p>
      </div>
    </div>
  </footer>;
}
