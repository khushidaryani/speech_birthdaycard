import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Grid2 } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Tooltip, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Description as DescriptionIcon, Help as HelpIcon, Share as ShareIcon } from '@mui/icons-material';
import { WhatsApp as WhatsAppIcon, Telegram as TelegramIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { Twitter as TwitterIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from '@mui/icons-material';

function Menu() {

    // Estado para controlar la apertura del menú lateral
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Estado para controlar la apertura del diálogo de compartir
    const [dialogOpen, setDialogOpen] = useState(false);

    // Alternar el estado del menú lateral
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Alternar el estado del diálogo de compartir
    const toggleDialog = () => {
        setDialogOpen((prev) => !prev);
    };

    const DrawerList = (

        <Grid2 sx={{ width: 250 }} onClick={toggleDrawer(false)}>

            <List>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/card'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tarjeta" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link to={'/help'} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ayuda" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Grid2>
    );

    return (

        <>
            {/* Barra de navegación */}
            <AppBar position='static'>
                <Toolbar>
                    <Tooltip title="Menú" placement="bottom" arrow>
                        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>

                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Lucida Handwriting, cursive' }}>
                        Cake Crafter
                    </Typography>

                    <Box display="flex" alignItems="center">
                        <Tooltip title="Compartir" arrow>
                            <IconButton sx={{ color: "white" }} onClick={toggleDialog}>
                                <ShareIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Menú lateral */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

            {/* Diálogo de compartir */}
            <React.Fragment>

                <Dialog open={dialogOpen} onClose={toggleDialog} aria-labelledby="alert-dialog-title">

                    <DialogTitle id="alert-dialog-title">
                        {"¿A través de qué plataforma quieres compartir?"}
                    </DialogTitle>

                    <DialogActions sx={{ justifyContent: "center" }}>
                        <Tooltip title="WhatsApp" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <WhatsAppIcon />
                            </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Telegram" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <TelegramIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Facebook" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <FacebookIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Twitter (X)" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <TwitterIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="LinkedIn" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Email" arrow>
                            <IconButton onClick={() => toggleDialog()}>
                                <EmailIcon />
                            </IconButton>
                        </Tooltip>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        </>
    );
}

export default Menu;