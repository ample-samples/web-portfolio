import { Container, Typography, Box } from "@mui/material"
import './style.css'

export function TryMobile() {

  return(
    <>
      <Container component="main" maxWidth="md">
        <div className="try-mobile">
        <Typography variant='h4' sx={{padding: "30px"}}>A good mobile layout is essential, here's this site's!</Typography>
          <div className="center">
            <iframe
              title="try-mobile"
              width="375"
              height="667"
              src="https://ample-samples.github.io/web-portfolio/#/"
            ></iframe>
          </div>
        </div>
        <Typography className="mobile-info-message" variant='h5' sx={{textAlign: "center"}}>The mobile preview is not available on small devices :(</Typography>
      </Container>
    </>
  )
}
