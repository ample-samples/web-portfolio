import { Container, Typography, Box, Card, CardContent, CardActions, Button, CardHeader } from "@mui/material"
import { useState } from "react";
import profilePicture from '../files/pictures/profile-pic.jpg'
import './style.css'

export function About() {

  return(
    <>
      <Container component="main" maxWidth="xl">
        <Box
        sx={{
          display: "flex"
        }}>
          <img src={profilePicture} alt="Profile Picture" className="profile-pic" />
        </Box>
        <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography variant='h4' sx={{color: 'inherit'}}  >
            About me
          </Typography>
        </Box>
        <Box
        sx={{

        }}>
          <Typography variant='p' sx={{color: 'inherit'}}  >
            About me
          </Typography>
        </Box>
      </Container>
    </>
  )
}
