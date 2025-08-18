import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./Myprojects.css"
import Pomodoro from "../images/Pomodoro.jpg";
import bookStore from "../images/bookStore.jpg";
import Note from "../images/Note.jpg";
import weatherApp from "../images/weatherApp.jpg";
import todolist from "../images/todolist.jpg";
import ticTacToeImg from "../images/ticTacToeImg.jpg";



function Myprojects() {
  return (
    <>
          <h2 className='text-center p-1'>My Projects</h2>

    <div className="myProjects">
       <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={Pomodoro}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            React + Typescript + ...
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="490"
          image={bookStore}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            React + Typescript
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
        <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={Note}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
     <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={weatherApp}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
     <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={todolist}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
      <Card sx={{ maxWidth: 345 ,maxHeight:500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={ticTacToeImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
       
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  )
}

export default Myprojects