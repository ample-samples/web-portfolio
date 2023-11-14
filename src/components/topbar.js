import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar, 
  Box, 
  AppBar,
  Tooltip,
  Slide,
  Modal
} from '@mui/material';
import { useSnackbar } from 'notistack';

const pages = ['Home', 'Portfolio', 'About Me', 'Try on Mobile'];

export function Topbar() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

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

  const handleMenuClick = (event) => {
    switch (event.target.textContent) {
      case pages[0]:
        navigate('/')
        break

      case pages[1]:
        navigate('/portfolio')
        break

      case pages[2]:
        navigate('/about')
        break

      case pages[3]:
        navigate('/try-mobile')
        break

      default:
        break
    }
    setAnchorElNav(null); /* this closes the nav menu */
  };

  const [ mobileModalOpen, setMobileModalOpen ] = useState(false);
  const [ emailModalOpen, setEmailModalOpen ] = useState(false);

  const handleClose = () => {
    setEmailModalOpen(false)
    setMobileModalOpen(false)
  }

  const handleOpenMobile = () => {
    setMobileModalOpen(true)
  }

  const handleOpenEmail = () => {
    setEmailModalOpen(true)
  }

  const TransitionComponentUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

  const handleCopyEmail = (event) => {
    try {
      navigator.clipboard.writeText("todd.griffin61@outlook.com")
      enqueueSnackbar("Email Copied to Clipboard", {variant: 'success', TransitionComponent: TransitionComponentUp})
    } catch (error) {
      enqueueSnackbar("Oops, something went wrong", {variant: 'error', TransitionComponent: TransitionComponentUp, autoHideDuration: 1500})
      handleOpenEmail(true)
    }
  }

  const handleCopyMobile = (event) => {
    try {
      navigator.clipboard.writeText("+447883965135")
      enqueueSnackbar("Mobile Copied to Cliboard", {variant: 'success', TransitionComponent: TransitionComponentUp})
    } catch (error) {
      enqueueSnackbar("Oops, something went wrong", {variant: 'error', TransitionComponent: TransitionComponentUp, autoHideDuration: 1500})
      handleOpenMobile()
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Todd Griffin
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleMenuClick}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => { 
                if (page === "Try on Mobile") {
                  return (<></>) 
                } else {
                  return (
                    <MenuItem key={page} onClick={handleMenuClick}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  )
                }})}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontWeight: 700,
              translate: '0px 3px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: "5px"
            }}
          >
            Todd Griffin
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              translate: '0px 3px'
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleMenuClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Tooltip title='copy mobile'>
            <Box
              name='mobile'
              onClick={
                handleCopyMobile
              }
              sx={{ 
                flexGrow: 0, 
                display: { xs: 'flex' },
                translate: '0px 3px',
                cursor: 'copy'
              }}>
              <SmartphoneIcon sx={{ translate: '0px -3px', }} />
              <Typography sx={{ display: { xl: 'flex', md: 'flex', xs: 'none' }, }} >
                +447883 965 135
              </Typography>
            </Box>
          </Tooltip>
          <Tooltip title='copy email'>
            <Box
              id='copy-email'
              onClick={
                handleCopyEmail
              }
              sx={{ 
                flexGrow: 0, 
                display: { xs: 'flex' },
                translate: '0px 3px',
                cursor: 'copy',
                marginLeft: '20px'
              }}>
              <MailOutlineIcon sx={{ translate: '0px -1px', paddingRight: '3px' }} />
              <Typography sx={{ display: { xl: 'flex', md: 'flex', xs: 'none' }, }} >
                todd.griffin61@outlook.com
              </Typography>
            </Box>
              <Modal onClose={handleClose} open={emailModalOpen}>
                <Box sx={{...style, display: {xs: "block", sm: "block", md: "none"}, width: "75vw", maxHeight: "83vh"}}>
                  <Typography sx={{fontSize: "0.7rem"}} variant="p">Couldn't copy email</Typography>
                  <Typography variant="h6" component="h2">todd.griffin61@outlook.com</Typography>
                </Box>
              </Modal>
              <Modal onClose={handleClose} open={mobileModalOpen}>
                <Box sx={{...style, display: {xs: "block", sm: "block", md: "none"}, width: "75vw", maxHeight: "83vh"}}>
                  <Typography sx={{fontSize: "0.7rem"}}>Couldn't copy mobile</Typography>
                  <Typography variant="h6" component="h2">+447883 965 135</Typography>
                </Box>
              </Modal>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
