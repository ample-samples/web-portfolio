import { Typography, Button, Modal, Box, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { useState } from "react";


export function PortfolioEntry({ title, img, shortDesc, fullDesc, repoURL, hostedURL, frontendRepo, backendRepo}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // TODO: shift modal to the left to centralise it on small 
  // screens (accounting for the scrollbar)
  // and hide the scrollbar behind phone frame

  return(
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title="Brewery Tours"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDesc}
          </Typography>
        </CardContent>
        <CardActions>
          {hostedURL ? <Button size="small"><a href={hostedURL}>Visit Site</a></Button> : null}
          <Button size='small' onClick={handleOpen}>Learn more</Button>
          {frontendRepo ? <Button size="small"><a href={frontendRepo}>Front End</a></Button> : null}
          {backendRepo ? <Button size="small"><a href={backendRepo}>Back End</a></Button> : null}
          {repoURL ? <Button size="small"><a href={repoURL}>Visit Repo</a></Button> : null}
        </CardActions>
      </Card>
      <div>
        <Modal
          className="portfolio-modal"
          open={open}
          onClose={handleClose}
        >
          <div>
            <Box sx={{...style, display: {xs: "block", md: "none"}, 
              position: "absolute",
              top: "50%",
              width: "75vw", maxHeight: "83vh"}}>
              <Typography variant="h6" component="h2">{title}</Typography>
              <img src={img} alt="" style={{width:"100%", height:"30vh", maxHeight:"90%", overflow:"hidden" }} />
              <Typography sx={{fontSize: "0.7rem"}}>{fullDesc}</Typography>
            </Box>
            <Box sx={{...style, display: {xs: "none", sm: "none", md: "block"}, maxHeight: "90vh", textAlign: "center"}}>
              <Typography variant="h6" component="h2">{title}</Typography>
              <img src={img} alt="" style={{maxHeight:"55vh", overflow:"hidden" }} />
              <Typography sx={{textAlign: "left"}}>{fullDesc}</Typography>
            </Box>
          </div>
        </Modal>
      </div>
    </>
  )
}
