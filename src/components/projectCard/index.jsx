import React from 'react'
import "./ProjectCard.scss";
import { Typography, Container, Card, Paper, CardMedia } from '@mui/material'
import projects from "../../projects.json";
import Grid from '@mui/material/Unstable_Grid2';
import { padding } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

const style ={
  display: "flex",
  flexDirection: "column", 
  alignItems: "center", 
  padding: "20px",
  backgroundColor: "blue",
}


function ProjectCard() {
  return (
    <Container className="cardContainer" style={{maxWidth: "100%", margin: "0 auto"}}>
        <Typography component="h2" variant="h4" marginBottom={3}>
          Prosjekter
        </Typography>
        <Grid container spacing={3} style={{maxwidth: "100%", margin: "0 auto", backgroundColor: "red" }}>
          {projects.map((project) =>
            <Grid xs={4} key={project.number}>
              <Card sx={style}>
                <Typography variant='h5' component="h3">
                  {project.title}
                </Typography>
                <CardMedia
                  className="media"
                  component="img"
                  height="200"
                  image={project.image}
                  />
                <Typography variant='p' component="p">
                  {project.description}
                </Typography>
              </Card>
            </Grid>
          )}
      </Grid>
    </Container>
  )
}

export default ProjectCard