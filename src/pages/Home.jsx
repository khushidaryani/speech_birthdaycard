import React from 'react';
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

function Home() {

    return (
        <>
            {/* Menú de navegación */}
            <Menu />

            {/* Contenedor principal */}
            <Box
                sx={{
                    marginTop: '85px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {/* Contenedor de la tarjeta */}
                <Card
                    sx={(theme) => ({
                        minWidth: '350px',
                        width: '90%',
                        maxWidth: '2000px',
                        height: '420px',
                        border: `1px solid ${theme.palette.primary.main}`,
                        paddingBottom: '16px',
                        transition: 'box-shadow 0.4s ease-in-out',
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: `0px 0px 50px 15px ${theme.palette.tertiary.main}`,
                        },
                        overflow: 'auto',
                    })}
                >
                    {/* Contenido de la tarjeta */}
                    <CardContent>

                        <Typography variant="h4" component="div" sx={{ mt: 5 }}>
                            🎉 ¡Bienvenidas a Cake Crafter! 🎂
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 8 }}>
                            ¿Buscas una manera especial y divertida de felicitar a alguien en su cumpleaños?
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Nuestra aplicación convierte una simple felicitación en una experiencia mágica.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 8 }}>
                            Esta no es solo una tarjeta de cumpleaños... ¡es una experiencia interactiva única que hará sonreír a quien la reciba! 🥳
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🚀 ¡Prueba la magia y sorprende a tus seres queridos! 🎊
                        </Typography>
                    </CardContent>

                </Card>
            </Box>

            <Button
                component={Link}
                to="/card"
                variant="contained"
                sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    color: '#fff',
                    fontSize: '1rem',
                    padding: '24px',
                    minWidth: '100px',
                    height: '45px',
                    marginTop: '75px',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                    },
                })}
            >
                ¡Crear mi propia tarjeta!
            </Button>
        </>
    );
}

export default Home;