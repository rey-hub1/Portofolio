/* eslint-disable react/prop-types */
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import './app.css';
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Testing from "./Pages/Testing";
import Navbar from "./Components/Navbar/Navbar";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"
import Footer from "./Components/Navbar/Footer";
import { useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";


export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0);
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll ke atas
  }, [location]);
  return (
    <div className="font-['Roboto'] text-[#d9eeea]">
      {
        loading ?
          <div className="flex items-center justify-center h-screen">
            <PulseLoader
              color={"#5aa79f"}
              loading={loading}
              // cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <motion.div
            initial={{ opacity: 0 }} // Mulai dengan opacity 0
            animate={{ opacity: 1 }} // Animasi opacity menjadi 1
            transition={{ duration: 2, ease: "easeInOut" }} // Durasi animasi 1.5 detik

          >
            <Navbar />
            <AnimatePresence >
              <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="Test" element={<Testing />} />
                <Route path="contact" element={<PageWrapper> <Contact /></PageWrapper>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            {location.pathname !== "/contact" && <Footer></Footer> }
            {/* <Footer /> */}
          </motion.div>
      }
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}