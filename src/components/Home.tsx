//  import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import profile from '../profile.jpg';
import ImageListItem from '@mui/material/ImageListItem';
import "./Home.css"

function Home(){
    return(
        <div className="home d-flex flex-row h-120">

 <div>
    <h1>Who Am I ?</h1>
    <p>I am Mourad Elfetni,a Front End Developper <br />
     Who Builds responsive,user-friendly,and <br /> Visaully Engaging Web Applications. 
        <br />I turn My ideas into interactive digital experiences</p>
 </div>
        <ImageListItem >
          <img
          style={{borderRadius:'50%',width:'300px',height:'300px'}}
            src={profile}
            alt={'profile ...'}
            loading="lazy"
          />
        </ImageListItem>


        </div>
    )
}
export default Home;