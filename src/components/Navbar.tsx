import { useState } from "react";
import './navbar.css';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation(); // <-- to check active route

  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <motion.div
      className="d-flex flex-row w-100 container"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween' }}
    >
      <h4 className="flex-1">Mourad Elfetni.</h4>

      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="moreVertIcon"
      >
        <MoreVertIcon style={{ color: "white" }} />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: { style: { width: '20ch' } },
          list: { 'aria-labelledby': 'long-button' },
        }}
      >
        <MenuItem
          key="Home"
          selected={location.pathname === "/"}
          onClick={handleClose}
          className="menuItem"
        >
          <Link to="/" style={{ textDecoration: "none", color: 'black' }}>Home</Link>
        </MenuItem>

        <MenuItem
          key="About"
          selected={location.pathname === "/about"}
          onClick={handleClose}
          className="menuItem"
        >
          <Link to="/about" style={{ textDecoration: "none", color: 'black' }}>About Me</Link>
        </MenuItem>

        <MenuItem
          key="Myprojects"
          selected={location.pathname === "/myprojects"}
          onClick={handleClose}
          className="menuItem"
        >
          <Link to="/myprojects" style={{ textDecoration: "none", color: 'black' }}>My Projects</Link>
        </MenuItem>

        <MenuItem
          key="ContactMe"
          selected={location.pathname === "/contactme"}
          onClick={handleClose}
          className="menuItem"
        >
          <Link to="/contactme" style={{ textDecoration: "none", color: 'black' }}>Contact Me</Link>
        </MenuItem>
      </Menu>

      <div className="d-flex flex-row navbar flex-4">
        <Link to="/" style={{ textDecoration: "none", color: 'white' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: 'white' }}>About Me</Link>
        <Link to="/myprojects" style={{ textDecoration: "none", color: 'white' }}>My Projects</Link>
        <Link to="/contactme" style={{ textDecoration: "none", color: 'white' }}>Contact Me</Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
