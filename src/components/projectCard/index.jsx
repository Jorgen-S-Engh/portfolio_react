import React from 'react'
import "./ProjectCard.scss";
import { Typography, Container, Card, Paper, CardMedia } from '@mui/material'
import projects from "../../projects.json";
import Grid from '@mui/material/Unstable_Grid2';


function ProjectCard() {
  return (
    <Container>
      <Typography component="h2" variant="h4">
        Prosjekter
      </Typography>
      {projects.map((project) =>
        <Card key={project.number}>
          <Typography variant='h5' component="h3">
            {project.title}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={project.image}
          
          
          />

          {/* <img src={project.image} alt={project.title} /> */}

        </Card>
      
      )}
    </Container>
  )
}

export default ProjectCard