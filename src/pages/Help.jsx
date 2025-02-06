import React from 'react';
import { Typography } from '@mui/material';
import Menu from '../components/Menu';

function Help() {

    return (

        <>
            <Menu />

            <Typography variant="h4" component="div" sx={{ mt: 10 }}>
                ¿Qué hace nuestra app?
            </Typography>
            <Typography variant="h7" component="div" sx={{ mt: 5 }}>
                Con ayuda del reconocimiento de voz, podrás:
            </Typography>
            <Typography variant="h7" component="div" sx={{ mt: 2 }}>
                🎙️ Decir el nombre del cumpleañero/a y verlo reflejado en pantalla<br /><br />
                🎂 Soplar las velas usando tu voz<br /><br />
                🎵 Reproducir música de fondo para ambientar la celebración<br /><br />
                🎈 Lanzar globos por toda la pantalla para un efecto festivo
            </Typography>

            <Typography variant="h4" component="div" sx={{ mt: 7 }}>
                ¿Cómo funciona?
            </Typography>
            <Typography variant="h7" component="div" sx={{ mt: 5 }}>
                1️⃣ Abre la pestaña "Tarjeta" y activa el reconocimiento de voz (botón "Encender")<br /><br />
                2️⃣ Usa comandos como "Feliz cumpleaños [nombre]", "Soplar velas", "Reproducir música" o "Lanzar globos"<br /><br />
                3️⃣ Disfruta de la animación y la celebración virtual
            </Typography>

        </>
    );
}

export default Help;
