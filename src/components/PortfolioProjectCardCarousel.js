import { Typography, Button, Modal, Box, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { useState } from "react";
import Slider from "react-slick"


export function PortfolioEntryCarousel({ title, img, shortDesc, fullDesc, repoURL, hostedURL}) {
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

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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
          {hostedURL && <Button size="small"><a href={hostedURL}>Visit Site</a></Button>}
          <Button size="small"><a href={repoURL}>Visit Repo</a></Button>
          <Button size='small' onClick={handleOpen}>Learn more</Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography variant="h6" component="h2">{title}</Typography>
            <Typography>{fullDesc}</Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}
