import { Container, Typography, Box } from "@mui/material"
import iPhoneShell from '../files/pictures/iPhone14_shell.png'
import iPhoneFull from '../files/pictures/iPhone_chrome_full_ui.png'
import './style.css'

export function TryMobile() {

  return (
    <>
      <Container component="main" maxWidth="md">
        <div className="try-mobile">
          <Typography variant='h4' sx={{ padding: "30px" }}>A responsive layout is essential, here's this site's!</Typography>
          <div className="center" style={{ position: "relative", top: 0, left: 0, height: 850 }}>
            <Box sx={{ position: "relative", top: 104, left: 0 }}>
              <iframe
                className="frame-area"
                seamless="seamless"
                title="try-mobile"
                width="380"
                height="646"
                src="https://ample-samples.github.io/web-portfolio/#/"
                frameborder="0"
              />
            </Box>
            <Box sx={{ position: "absolute", top: 10, pointerEvents: "none" }} >
              <img height="820" src={iPhoneFull} alt="iPhone" />
            </Box>
            <Box sx={{ position: "absolute", top: 0, pointerEvents: "none" }} >
              <img height="850" src={iPhoneShell} alt="iPhone" />
            </Box>

          </div>
        </div>
        <Typography className="mobile-info-message" variant='h5' sx={{ textAlign: "center" }}>The mobile preview is not available on small devices :(</Typography>
      </Container>
    </>
  )
}
