import { Box, Container, Typography } from "@mui/material"

export function Homepage() {
  return(
    <>
      <Container component="main" maxWidth="md">
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography variant='h4' >
            Homepage
          </Typography>
        </Box>
      </Container>
    </>
  )
}
