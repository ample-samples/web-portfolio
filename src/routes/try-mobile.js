import { Container, Typography, Box } from "@mui/material"
import iPhoneShell from '../files/pictures/iPhone14_shell.png'
import iPhoneFull from '../files/pictures/iPhone_chrome_full_ui.png'
import device from '../files/pictures/device.svg'
import deviceGlass from '../files/pictures/glass.svg'
import './style.css'

export function TryMobile() {
  // Mobile layout courtesy of:
  // https://www.figma.com/file/oeGUiu3zBZDykQQm6ZvnfX/iPhone-Browsers---Safari-%26-Chrome-(iOS-15)-(Community)?node-id=747%3A19149&mode=dev
  return (
    <>
      <Container component="main" maxWidth="md">
        <div className="try-mobile">
          <Typography variant='h4' sx={{ padding: "30px" }}>A responsive layout is essential, here's this site's!</Typography>
          <div className="center" style={{ position: "relative", top: 0, left: 0, height: 860 }}>
            <Box sx={{ position: "absolute", top: -7, pointerEvents: "none" }} >
              <img height="866" src={device} alt="iPhone" style={{borderRadius: 23}} />
            </Box>
            <Box sx={{ position: "absolute", backgroundColor: "white", height: 654, width: 380, top: 104, pointerEvents: "none" }} >
            </Box>
            <Box sx={{ position: "relative", top: 104, left: 0 }}>
              <iframe
                className="frame-area"
                seamless="seamless"
                title="try-mobile"
                width="380"
                height="654"
                src="/web-portfolio/#/"
                frameborder="0"
              />
            </Box>
            <Box sx={{ position: "absolute", top: 10, pointerEvents: "none" }} >
              <img height="828" src={iPhoneFull} alt="iPhone" style={{borderRadius: 23}} />
            </Box>
            <Box sx={{ position: "absolute", top: 0, pointerEvents: "none" }} >
              <img height="850" src={iPhoneShell} alt="iPhone" />
            </Box>
            <Box sx={{ position: "absolute", top: 2, pointerEvents: "none" }} >
              <img height="850" src={deviceGlass} alt="iPhone" style={{borderRadius: 23}} />
            </Box>

          </div>
        </div>
        <Typography className="mobile-info-message" variant='h5' sx={{ textAlign: "center" }}>The mobile preview is not available on small devices :(</Typography>
      </Container>
    </>
  )
}
