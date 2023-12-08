import { Slide, Box, Container, List, ListItem, ListItemText, Typography, Button, Grid, Card } from "@mui/material"
import profilePicture from '../files/pictures/profile-pic.jpg'
import { Navigate, useNavigate } from 'react-router-dom';
import "./style.css"
import { useSnackbar } from 'notistack';


export function About() {
  const { enqueueSnackbar } = useSnackbar()
  const frontEndTechs = ["React", "JavaScript", "Typescript", "HTML5", "CSS3"]
  const backEndTechs = ["Node.js", "PostgreSQL", "Prisma", "APIs", "Express"]
  const toolsTechs = ["Git", "NPM", "Figma", "Neovim", "Linux"]

  const createListItems = (techs) => {
    return techs.map((tech) => <ListItem><ListItemText>{tech}</ListItemText></ListItem>)
  }

  const uLinksSx = { justifyContent: "left" }
  const stackIconHeight = 60
  const stackIconWidth = 45
  const highlightSx = { color: "#1976d2", display: "inline", fontWeight: "bold", fontSize: 18 }

  const handleCopyEmail = (event) => {
    try {
      navigator.clipboard.writeText("todd.griffin61@outlook.com")
      enqueueSnackbar("Email Copied to Clipboard", { variant: 'success', TransitionComponent: TransitionComponentUp, autoHideDuration: 3000 })
    } catch (error) {
      enqueueSnackbar("Oops, something went wrong", { variant: 'error', TransitionComponent: TransitionComponentUp, autoHideDuration: 1500 })
    }
  }

  const handleCopyMobile = (event) => {
    try {
      navigator.clipboard.writeText("+447883965135")
      enqueueSnackbar("Mobile Copied to Cliboard", { variant: 'success', TransitionComponent: TransitionComponentUp, autoHideDuration: 3000 })
    } catch (error) {
      enqueueSnackbar("Oops, something went wrong", { variant: 'error', TransitionComponent: TransitionComponentUp, autoHideDuration: 1500 })
    }
  }

  function Highlight({ children }) {
    return <Typography variant="p" sx={highlightSx}>{children}</Typography>
  }

  function TransitionComponentUp(props) {
    return <Slide {...props} direction="up" />;
  }


  return (
    <Container className="about" maxWidth='md'>
      <br />
      <br />
        <Box>
          <img src={profilePicture} alt="Profile" className="profile-pic" />
        </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 3,
        }}>
        <Typography variant='p' sx={{ marginBottom: 6, lineHeight: 1.5 }}>
          I'm an aspiring Junior Full Stack Software Developer with a <Highlight>passion</Highlight> and <Highlight>strong drive</Highlight> for creating performant and accessible digital solutions.
          <br />
          <br />
          On the front end, I'm skilled in building user interfaces using <Highlight>React</Highlight>, <Highlight>JavaScript</Highlight>, and <Highlight>TypeScript</Highlight>.
          I most enjoy bringing designs to life with React and TailwindCSS, ensuring a polished and responsive user experience.
          <br />
          <br />
          I support front end solutions with my back end skills using <Highlight>Node.js</Highlight> and Express (and more recently, Next.js Server Actions),
          I'm alse well-versed in database management, leveraging <Highlight>PostgreSQL</Highlight> and Prisma to organise and retrieve data efficiently.
          I enjoy working with <Highlight>API</Highlight>s, and seeing the front end and back end come together to create a dynamic and cohesive application.
          With a strong foundation in <Highlight>HTML5</Highlight>, <Highlight>CSS3</Highlight> and <Highlight>Javascript</Highlight>, I aim to bridge user experience and functionality.
          <br />
          <br />
          My goal is to <Highlight>contribute</Highlight> my skills to a collaborative team,
          where I can not only apply my knowledge in these technologies but also continue to <Highlight>learn</Highlight> and <Highlight>grow</Highlight>.
        </Typography>
        <Typography sx={{marginBottom: 6}} variant="h4">Don&prime;t hesitate to send me your thoughts through <Typography variant="p" sx={{ cursor: "copy" }}><a href="https://www.linkedin.com/in/todd-griffin-7817611bb/">LinkedIn</a></Typography>, <Typography variant="p" sx={{ cursor: "copy" }} onClick={handleCopyEmail}><a>email</a></Typography> or a <Typography variant="p" sx={{ cursor: "copy" }} onClick={handleCopyMobile}><a>text</a></Typography>! </Typography>
        <br />
        <br />
        <Typography variant='h4' sx={{ display: { xs: "block", md: "none" } }}>Feel free to check out some of my other stuff<br />👇  👇</Typography>
        <Typography variant='h4' sx={{ display: { xs: "none", md: "block" }, marginBottom: 1 }}>👇 <u>Feel free to check out some of my other stuff</u> 👇</Typography>
      </Box>

      <Grid container className="tech-verbose" sx={{
        flexDirection: { xs: "column", md: "row" }, justifyContent: "space-evenly",
      }}>
        <Grid sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://app.enhancv.com/share/f59e760b/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" sx={uLinksSx}>★ CV ★</Button>
        </Grid>
      </Grid>

      <Grid container className="tech-verbose" sx={{
        flexDirection: { xs: "column", md: "row" }, justifyContent: "center",
      }}>
        <Grid sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://github.com/ample-samples" sx={uLinksSx}>&lt; GitHub &gt;</Button>
        </Grid>

        <Grid sx={{ margin: 1 }}>
          <Button variant="contained" target="_blank" href="https://exercism.org/profiles/ample-samples" sx={uLinksSx}>&lt; Exercism &gt;</Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
          flexWrap: "wrap",
        }}>
        <Typography sx={{ marginBottom: 2, marginTop: 3 }} variant='h4'>Main Tech stack and Tools</Typography>
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
