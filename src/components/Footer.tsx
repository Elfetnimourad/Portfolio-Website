import React from 'react'
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import "./footer.css";

function Footer() {
  return (
    <div className="footer">

          <Divider style={{borderColor:'white'}} className="divider"></Divider>
<div className="data h-25 d-flex flex-row justify-content-between w-100">
    <h2>Mourad Elfetni.</h2>
    <div className="icons">
        <Link href="https://github.com/Elfetnimourad" underline="none" style={{color:'white'}}>
<GitHubIcon/>
</Link>
  <Link href="https://www.facebook.com/morad.elfetni" underline="none"  style={{color:'white'}}>
<FacebookIcon/>
</Link>
  <Link href="https://x.com/MElfetni54411" underline="none"  style={{color:'white'}}>
<XIcon/>
</Link>
 <Link href="https://www.linkedin.com/in/morad-elfetni-78061a23b/" underline="none"  style={{color:'white'}}>
<LinkedInIcon/>

</Link>

    </div>


</div>
    </div>
  )
}

export default Footer