import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>;
}

export default App;
