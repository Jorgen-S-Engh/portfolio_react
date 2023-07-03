import "./app.scss";
import Card from './components/Card'
import Hero from './components/Hero'
import ProjectCard from './components/projectCard';
import { Box, Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';




function App() {


  return (
    <>
    <Hero/>
    <Card/>
    <Grid container>
      <ProjectCard/>

    </Grid>


      
    </>
  )
}

export default App
