import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./Myprojects.css";

import Pomodoro from "../images/Pomodoro.jpg";
import bookStore from "../images/bookStore.jpg";
import Note from "../images/Note.jpg";
import weatherApp from "../images/weatherApp.jpg";
import todolist from "../images/todolist.jpg";
import ticTacToeImg from "../images/ticTacToeImg.jpg";

const projects = [
  { id: 1, title: "React + TypeScript + ...", image: Pomodoro },
  { id: 2, title: "Vanilla JS", image: bookStore },
  { id: 3, title: "React", image: Note },
  { id: 4, title: "React", image: weatherApp },
  { id: 5, title: "React", image: todolist },
  { id: 6, title: "JS + TS", image: ticTacToeImg },
];

function Myprojects() {
  return (
    <>
      <h2 className="text-center p-1">My Projects</h2>
      <div className="myProjects">
        {projects.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345, maxHeight: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Myprojects;
