import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./Myprojects.css";
import { motion } from 'framer-motion';

import Pomodoro from "../images/Pomodoro.jpg";
import bookStore from "../images/bookStore.jpg";
import Note from "../images/Note.jpg";
import weatherApp from "../images/weatherApp.jpg";
import todolist from "../images/todolist.jpg";
import ticTacToeImg from "../images/TicTacToeImg.jpg";

const projects = [
  { id: 1,name:'Pomodoro', title: "React + TypeScript + ...", image: Pomodoro },
  { id: 2,name:'bookStore', title: "Vanilla JS", image: bookStore },
  { id: 3,name:'Note', title: "React", image: Note },
  { id: 4,name:'weatherApp', title: "React", image: weatherApp },
  { id: 5,name:'todolist', title: "React", image: todolist },
  { id: 6,name:'ticTacToe', title: "JS + TS", image: ticTacToeImg },
];

function Myprojects() {
  return (
    <motion.div initial={{width:0}} animate={{width:'100%'}} exit={{x:'100%',transition:{duration:4,type:'tween'}}}>
      <h2 className="text-center p-1">My Projects</h2>
      <div className="myProjects">
        {projects.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345, maxHeight: 520 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                 <Typography gutterBottom variant="body1" component="div">
                  {project.name.toUpperCase()}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

export default Myprojects;
