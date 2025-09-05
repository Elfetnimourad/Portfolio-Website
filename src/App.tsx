import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
 import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Myprojects from './components/Myprojects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app d-flex flex-column'>
       <Navbar/>

   <Home/>
   <About/>
      <Myprojects/>
<ContactMe/>
<Footer/>
    </div>
  )
}

export default App
