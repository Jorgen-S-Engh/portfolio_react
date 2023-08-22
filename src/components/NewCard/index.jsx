import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Box } from '@mui/material';
import projects from "../../projects.json";
import Grid from '@mui/material/Unstable_Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faSquareJs, faReact, faPython, faWordpress, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';


const techToIcon = {
  "HTML5": faHtml5,
  "CSS3": faCss3,
  "JS": faSquareJs,
  "React": faReact,
  "Python": faPython,
  "Wordpress": faWordpress,
  "Bootstrap": faBootstrap,
  "Sass": faSass
};


export default function NewCard() {
  return (
    <>
      <Grid container spacing={2} marginTop={5} sx={{display: "flex", justifyContent: "center", maxWidth: "1000px" }}>
        {projects.map((project) =>
          <Grid xs={12} sm={6} md={4} key={project.number} >
            <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", fontWeight: 900}}>
             <Typography variant='h4' sx={{color: "#de1738", fontWeight: 900, fontFamily:"Mandalore"}}>0{project.number}</Typography>
             <Typography sx={{fontWeight: 900, fontSize: "1.2rem"}}>{project.title}</Typography>
            </Box>

            <Card sx={{maxWidth:"300px", bgcolor: "#11243e", height: "530px"}} className="card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{height: "150px", color: "white"}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", marginBottom: "10px"}}>
                <Button variant="contained">See demo</Button>
                <a href={project.github} target="_blank">
                  <GitHubIcon sx={{
                    marginTop: "15px",
                    fontSize: "2rem",
                    color: "#de1738",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "white"
                    }
                    }}/>
                </a>

                  <Typography variant="p" sx={{color: "white", fontWeight: "bold", margin: "5px", marginBottom: "10px" }}>Built with:</Typography>
                  <Grid container spacing={3}>
                    {project.tech && project.tech.map((tech, index) => (
                      <Grid key={index}>
                        <FontAwesomeIcon icon={techToIcon[tech]} style={{ color: "#de1738", fontSize: "2rem" }} />
                      </Grid>
                    ))}
                  </Grid>
              </Box>
            </Card>
          </Grid>
      )}
    </Grid>
    </>



  );
}