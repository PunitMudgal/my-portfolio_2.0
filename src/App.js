import { Suspense, lazy } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Projects = lazy(() => import("./pages/Projects"))

function App() {

  return <div>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
    <Home />
    <About />
    <Projects />
    <Contact />
    </Suspense>
    <Footer />
  </div>;
}

export default App;
