import { Box, Container, Typography, Button } from "@mui/material"

export function Homepage() {
  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h3'>Home</Typography>
        <Box 
          sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography variant='h4'>Socials</Typography>
        </Box>
          <Box sx={{}}>
            <Button sx={{display: "inline-block"}} target="_blank" href="https://www.linkedin.com/in/todd-griffin-7817611bb/">• LinkedIn</Button>
            <Button sx={{display: "inline-block"}} target="_blank" href="https://github.com/ample-samples">• GitHub</Button>
          </Box>
        <Box 
          sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
            flexWrap: "wrap"
        }}>
          <Typography variant='h4'>Main Tech stack and Tools</Typography>
        </Box>
        <div className="tech-stack">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
              <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a>
              <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
        </div>
      </Container>
    </>
  )
}
