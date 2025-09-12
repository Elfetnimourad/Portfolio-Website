import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Myprojects from './components/Myprojects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { HashRouter , Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <HashRouter>
        <div className="app d-flex flex-column">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/myprojects" element={<Myprojects />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>

          <Footer />
        </div>
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;
