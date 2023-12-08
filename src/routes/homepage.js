import { Box, Container, Typography, } from "@mui/material"
import profilePicture from '../files/pictures/profile-pic.jpg'
import "./style.css"
import { TimeLine } from "../components/timeline"

export function Homepage() {
  return (
    <>
      <Container component="main" maxWidth="md" sx={{ paddingTop: "30px" }} className="home">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography variant='h3'>Hi 👋 I'm</Typography>
          <Typography variant='h1'>Todd</Typography>
        </Box>
        <Box>
          <img src={profilePicture} alt="Profile Picture" className="profile-pic" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
        </Box>
        <Box
          sx={{
            display: "flex"
          }}>
          <Typography variant='p' fontSize={18} fontWeight="500" sx={{ color: 'inherit' }}>
            Passionate about elegant solutions and user-friendly interfaces.
            I see that software should be as easy for the end user to
            operate as possible to reduce friction and drive engagement and
            I love finding simple and innovative solutions.
          </Typography>
        </Box>
      </Container>
      <TimeLine />

    </>
  )
}
