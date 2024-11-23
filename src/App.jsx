import Home from "./Pages/home";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import './app.css';
import ScrollToTop from "./Components/ScrollToTop";
import Projects from "./Pages/Projects";
import Layout from "./Components/layout";



export default function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}