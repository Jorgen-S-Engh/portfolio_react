import React from 'react'
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faSquareJs, faReact, faPython, faWordpress } from '@fortawesome/free-brands-svg-icons';


function AboutMe() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          
        }}>
        <Box sx={{
          maxWidth: "30%",
          margin: "10px"
          
        
        }}>
          <Typography variant='h4' component="h2" sx={{margin: "10px"}}>About me</Typography>
          <Typography variant="p">I am finishing a two year higher professional degree in frontend-development in the spring of 2023. I have a masterdegree in political science, and I have experience working as a project manager and an IT-manager prior to my development-studies. Feel free to check out my portfolio, and contact me regarding anything.</Typography>
        </Box>
        <Box sx={{margin: "10px"}}>
          <Typography variant="h4" component="h2" sx={{margin: "10px"}}>Skills</Typography>


          <Grid container spacing={1}
            sx={{
              "&  *" : {
                display:"flex",
                flexDirection: "column",
                alignItems: "center"

              }}}>
            <Grid xs={4}>
              <FontAwesomeIcon icon={faHtml5} style={{ color: "#de1738", fontSize: "3rem" }} className="grid-item" />
              <Typography>HTML5</Typography>
            </Grid>
            <Grid xs={4}>
              <FontAwesomeIcon icon={faCss3} style={{ color: "#de1738", fontSize: "3rem" }} />
              <Typography>CSS3</Typography>
            </Grid>
            <Grid xs={4}>
              <FontAwesomeIcon icon={faSquareJs} style={{ color: "#de1738", fontSize: "3rem" }} />
              <Typography>JS</Typography>
            </Grid>
            <Grid xs={4}>
              <FontAwesomeIcon icon={faReact} style={{ color: "#de1738", fontSize: "3rem" }} />
              <Typography>React</Typography>
            </Grid>
            <Grid xs={4}>
              <FontAwesomeIcon icon={faPython} style={{ color: "#de1738", fontSize: "3rem" }} />
              <Typography>Python</Typography>
            </Grid>
            <Grid sx={4}>
              <FontAwesomeIcon icon={faWordpress} style={{ color: "#de1738", fontSize: "3rem" }} />
              <Typography>Wordpress</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default AboutMe