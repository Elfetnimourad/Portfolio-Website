//  import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import profile from '../profile.jpg';
import ImageListItem from '@mui/material/ImageListItem';
import "./Home.css"
import { motion } from 'framer-motion';

function Home(){
    return(
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:3,delay:10,type:'tween'}}}>

        <div className="home d-flex flex-row h-120">

 <div>
    <h1>Who Am I ?</h1>
    <p>I am Mourad Elfetni,a Front End Developper <br />
     Who Builds responsive,user-friendly,and <br /> Visaully Engaging Web Applications. 
        <br />I turn My ideas into interactive digital experiences</p>
 </div>
        <ImageListItem >
          <motion.img
          style={{borderRadius:'50%',width:'300px',height:'300px',border:"5px solid white"}}
            src={profile}
            alt={'profile ...'}
            loading="lazy"
            whileHover={{boxShadow:"0 0 8px rgba(255, 255, 255, 255)"
}}
          />
        </ImageListItem>


        </div>
        </motion.div>
    )
}
export default Home;