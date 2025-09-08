import './navbar.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.div className='d-flex flex-row w-100 container' initial={{x:-250}} animate={{x:0}} transition={{type:'tween'}}>
<h4 className='flex-1'>Mourad.</h4>
    <div className="d-flex flex-row navbar flex-4">
        <Link to={"/"} style={{textDecoration:"none",color:'white'}}>Home  </Link>
        <Link to={"/About"} style={{textDecoration:"none",color:'white'}}>About Me </Link>
        <Link to={"/Myprojects"} style={{textDecoration:"none",color:'white'}}>My Projects</Link>
        <Link to={"/ContactMe"} style={{textDecoration:"none",color:'white'}}>Contact Me</Link>
    </div>
        </motion.div>

  )
}

export default Navbar