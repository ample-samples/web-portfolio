import { Container, Typography, Box, Card, CardContent, CardActions, Button, CardHeader } from "@mui/material"
import { useState } from "react";

export function About() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return(
    <>
      <Container component="main" maxWidth="xl">
        <Box
        sx={{

        }}>
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
