import { Container, Typography, Box } from "@mui/material"
import './style.css'

export function TryMobile() {

  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h3'>Mobile</Typography>
        <div className="try-mobile center">
          <iframe
            title="try-mobile"
            width="375"
            height="667"
            src="https://ample-samples.github.io/web-portfolio/#/"
          ></iframe>
        </div>
        <Typography className="mobile-info-message" variant='h5' sx={{textAlign: "center"}}>The mobile preview is not available on small devices :(</Typography>
      </Container>
    </>
  )
}
