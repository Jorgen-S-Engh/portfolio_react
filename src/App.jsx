import "./app.scss";
import Card from './components/Card'
import Hero from './components/Hero'
import ProjectCard from './components/projectCard';
import { Box, Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import NewCard from "./components/NewCard";
import AboutMe from "./components/AboutMe";


function App() {


  return (
    <>
    <Hero/>
    <AboutMe/>
    <Grid container sx={{display: "flex", justifyContent: "center"}}>
      <NewCard/>
    </Grid>




      
    </>
  )
}

export default App
