import { Box, Container, List, ListItem, ListItemText, Typography, Button, Grid, Card } from "@mui/material"
import { Navigate, useNavigate } from 'react-router-dom';
import profilePicture from '../files/pictures/profile-pic.jpg'
import "./style.css"
export function About() {

  const frontEndTechs = ["React", "JavaScript", "Material UI", "HTML5", "CSS3"]
  const backEndTechs = ["Node.js", "PostgreSQL", "Prisma", "APIs", "Express"]
  const toolsTechs = ["Git", "NPM", "Figma", "Neovim", "Linux"]

  const createListItems = (techs) => {
    return techs.map((tech) => <ListItem><ListItemText>{tech}</ListItemText></ListItem>)
  }

  const uLinksSx = { justifyContent: "left" }
  const navigate = useNavigate()
  const stackIconHeight = 60
  const stackIconWidth = 45


  return (
    <Container className="about" maxWidth='md'>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 3,
        }}>
        <Typography variant='h4'>👇Check out some of my socials👇</Typography>
      </Box>
      <Grid container className="tech-verbose" sx={{
        flexDirection: "row", justifyContent: "space-evenly", 
      }}>
        <Grid md={2} sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" onClick={() => navigate("/portfolio")} sx={uLinksSx}>&lt; Projects &gt;</Button>
        </Grid>

        <Grid md={2} sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://app.enhancv.com/share/f59e760b/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" sx={uLinksSx}>&lt; CV &gt;</Button>
        </Grid>

        <Grid md={2} sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://www.linkedin.com/in/todd-griffin-7817611bb/" sx={uLinksSx}>&lt; LinkedIn &gt;</Button>
        </Grid>

        <Grid md={2} sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://github.com/ample-samples" sx={uLinksSx}>&lt; GitHub &gt;</Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 3,
          flexWrap: "wrap",
        }}>
        <Typography sx={{ marginBottom: 2 }} variant='h4'>Main Tech stack and Tools</Typography>
      </Box>
      <Grid container spacing={2} className="tech-stack" sx={{ flexGrow: 1, flexWrap: "wrap", justifyContent: "center", }}>
        <Grid item><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
      </Grid>
      <Grid container spacing={2} className="tech-stack" sx={{ flexGrow: 1, flexWrap: "wrap", justifyContent: "center", }}>
        <Grid item><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
        <Grid item><a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width={stackIconWidth} height={stackIconHeight} /> </a></Grid>
      </Grid>
      <Typography sx={{ marginTop: 5 }} variant='h5'>Full Tech Stack</Typography>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container className="tech-verbose" sx={{ justifyContent: "center", }} >
          <Grid md={2} sx={{ margin: 1 }}><Card sx={{ backgroundColor: "grey.300" }}>
            <Typography sx={{ textAlign: "center", margin: 1 }}>Front end Tech</Typography>
            <List dense={true}>
              {createListItems(frontEndTechs)}
            </List>
          </Card></Grid>

          <Grid md={2} sx={{ margin: 1 }}><Card sx={{ backgroundColor: "grey.300" }}>
            <Typography sx={{ textAlign: "center", margin: 1 }}>Back End Tech</Typography>
            <List dense={true}>
              {createListItems(backEndTechs)}
            </List>
          </Card></Grid>

          <Grid md={2} sx={{ margin: 1 }}><Card sx={{ backgroundColor: "grey.300" }}>
            <Typography sx={{ textAlign: "center", margin: 1 }}>Tools</Typography>
            <List dense={true}>
              {createListItems(toolsTechs)}
            </List>
          </Card></Grid>

        </Grid>
      </Box>
    </ Container>
  )

}

