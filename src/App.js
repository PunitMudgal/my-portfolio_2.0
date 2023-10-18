import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
