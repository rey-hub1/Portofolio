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
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"
// import Footer from "./Components/Footer";



export default function App() {
  const location = useLocation();
  return (
    <div className="font-['Roboto'] text-[#d9eeea]">
      <ScrollToTop />
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
      {/* <Footer /> */}
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