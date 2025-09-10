import {useState} from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <motion.div className='d-flex flex-row w-100 container' initial={{x:-250}} animate={{x:0}} transition={{type:'tween'}}>
<h4 className='flex-1'>Mourad Elfetni.</h4>
<IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="moreVertIcon"
      >
        <MoreVertIcon style={{color:"white"}} />
      </IconButton>
       <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: "auto",
              width: '20ch',
            },
          },
          list: {
            'aria-labelledby': 'long-button',
          },
        }}
      >
        
          <MenuItem key={"Home"} selected onClick={handleClose} className="menuItem">
                    <Link to={"/Portfolio-Website"} style={{textDecoration:"none",color:'black'}}>Home  </Link>

          </MenuItem>
      <MenuItem key={"About"}  onClick={handleClose} className="menuItem">
        <Link to={"/About"} style={{textDecoration:"none",color:'black'}}>About Me </Link>

          </MenuItem>
           <MenuItem key={"Myprojects"}  onClick={handleClose} className="menuItem">
        <Link to={"/Myprojects"} style={{textDecoration:"none",color:'black'}}>My Projects</Link>

          </MenuItem>
           <MenuItem key={"ContactMe"}  onClick={handleClose} className="menuItem">
        <Link to={"/ContactMe"} style={{textDecoration:"none",color:'black'}}>Contact Me</Link>

          </MenuItem>
      </Menu>
    <div className="d-flex flex-row navbar flex-4">
        <Link to={"/Portfolio-Website"} style={{textDecoration:"none",color:'white'}}>Home  </Link>
        <Link to={"/About"} style={{textDecoration:"none",color:'white'}}>About Me </Link>
        <Link to={"/Myprojects"} style={{textDecoration:"none",color:'white'}}>My Projects</Link>
        <Link to={"/ContactMe"} style={{textDecoration:"none",color:'white'}}>Contact Me</Link>
    </div>
        </motion.div>

  )
}

export default Navbar