import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
 import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Myprojects from './components/Myprojects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function App() {

  return (
  <AnimatePresence>
        <Router>

    <div className='app d-flex flex-column '>
 <Navbar/>

  <Routes>
          

        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Myprojects" element={<Myprojects />} />
                <Route path="ContactMe" element={<ContactMe />} />

      </Routes>
        <Footer/>

    </div>
        </Router>
</AnimatePresence>  
  )
}

export default App
