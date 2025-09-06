import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='d-flex flex-row w-100 container'>
<h4 className='flex-1'>Mourad.</h4>
    <div className="d-flex flex-row navbar flex-4">
        <Link to={"/"}>Home  </Link>
        <Link to={"/About"}>About Me </Link>
        <Link to={"/Myprojects"}>My Projects</Link>
        <Link to={"/ContactMe"}>Contact Me</Link>
    </div>
        </div>

  )
}

export default Navbar