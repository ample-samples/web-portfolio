import { Typography, Container, Button, Modal, Box } from "@mui/material"
import { useState } from "react";
import brewerytours from '../files/pictures/brewerytours.png'

export function Portfolio() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70vw',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <>
      <Container component="main" maxWidth="md">
        <Typography variant='h3'>Portfolio</Typography>
        <div>
        <Button onClick={handleOpen}>Brewery Tours</Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography variant="h6" component="h2">
                Brewery Tours
                <img src={brewerytours} alt="" style={{width:"100%"}} />
            </Typography>
          </Box>
        </Modal>
      </div>
      </Container>
    </>
  )
}
