import { Container, Typography, Box } from "@mui/material"
import profilePicture from '../files/pictures/profile-pic.jpg'
import './style.css'

export function About() {

  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h3'>About Me</Typography>
        <Box>
          <img src={profilePicture} alt="Profile Picture" className="profile-pic" />
        </Box>
        <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography variant='h4' sx={{color: 'inherit'}}>
            About me
          </Typography>
        </Box>
        <Box
        sx={{
          display: "flex"
        }}>
          <Typography variant='p' sx={{color: 'inherit'}}>
            I'm most passionate about elegant solutions, user-friendly interfaces. I believe that software should be as easy for the end user to operate as possible to reduce friction and drive engagement. I'm looking forward to being able to apply some or all of these things in my career!
          </Typography>
        </Box>
      </Container>
    </>
  )
}
