import React, { useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Grid2 } from '@mui/material';
import Menu from '../components/Menu';
import '../components/Card.css';

const Card = () => {

    const [videoSrc, setVideoSrc] = useState(null);
    const [audioSrc, setAudioSrc] = useState(null);
    const [message, setMessage] = useState('');
    const [isBirthdayMessage, setIsBirthdayMessage] = useState(false);

    // Referencias para el video y el audio
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const commands = [
        {
            command: 'Feliz cumpleaños *',
            callback: (name) => {
                setMessage(`¡Feliz cumpleaños, ${name}!`);
                setIsBirthdayMessage(true);
                setVideoSrc('/tarta.mp4');
                setAudioSrc(null);
            }
        },
        {
            command: 'Reproducir música',
            callback: () => {
                setMessage('');
                setVideoSrc('/tarta.mp4');
                setAudioSrc('/cumpleaños_musica_fondo.mp3');
                if (listening) {
                    SpeechRecognition.stopListening(); // Detiene el micrófono para no interferir con el audio
                }
            }
        },
        {
            command: 'Soplar velas',
            callback: () => {
                setMessage('');
                setVideoSrc('/soplar_velas.mp4');
                setAudioSrc('/soplar_velas_fondo.mp3');
                if (listening) {
                    SpeechRecognition.stopListening(); // Detiene el micrófono para no interferir con el audio
                }
            }
        },
        {
            command: 'Lanzar globos',
            callback: () => {
                setMessage('');
                setVideoSrc('/lanzar_globos.mp4');
                setAudioSrc(null);
            }
        }
    ];

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

    console.log(transcript);

    if (!browserSupportsSpeechRecognition) {
        return <span>Tu navegador no soporta reconocimiento de voz :/</span>;
    }

    // Función para resetear tanto la transcripción como el video y audio
    const handleReset = () => {
        resetTranscript();
        setVideoSrc(null);
        setAudioSrc(null);
        setMessage('');
    };

    // Actualiza el video y el audio cuando cambia el videoSrc o audioSrc
    React.useEffect(() => {
        if (videoSrc && videoRef.current) {
            // Reinicia el video cargándolo de nuevo
            videoRef.current.load();
        }
        if (audioSrc && audioRef.current) {
            // Reinicia el audio cargándolo de nuevo
            audioRef.current.load();
        }
    }, [videoSrc, audioSrc]);

    return (
        <>
            <Menu />

            <br /><br />

            <div>

                <p>Micrófono: {listening ? 'encendido' : 'apagado'}</p>

                <Grid2 container spacing={2} justifyContent="center">

                    <Grid2 xs={12} sm={4} md={3}>
                        <Button
                            variant="contained"
                            onClick={() => SpeechRecognition.startListening({ continuous: true })}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                }
                            })}
                        >
                            Encender
                        </Button>
                    </Grid2>

                    <Grid2 xs={12} sm={4} md={3}>
                        <Button
                            variant="contained"
                            onClick={SpeechRecognition.stopListening}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                }
                            })}
                        >
                            Apagar
                        </Button>
                    </Grid2>

                    <Grid2 xs={12} sm={4} md={3}>
                        <Button
                            variant="contained"
                            onClick={handleReset}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.secondary.main,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                }
                            })}
                        >
                            Resetear
                        </Button>
                    </Grid2>
                </Grid2>

            </div>

            {videoSrc && (
                <div className="video-container" key={videoSrc}>
                    <video
                        className="video-player"
                        autoPlay
                        loop={videoSrc === '/tarta.mp4'}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Tu navegador no soporta el elemento de video :/
                    </video>
                </div>
            )}

            {audioSrc && (
                <audio
                    ref={audioRef}
                    autoPlay
                    style={{ display: 'none' }} // Oculta el reproductor de audio
                >
                    <source src={audioSrc} type="audio/mp3" />
                    Tu navegador no soporta el elemento de audio :/
                </audio>
            )}

            {/* Mensaje debajo del vídeo solo cuando se dice "Feliz cumpleaños [nombre]" */}
            {message && isBirthdayMessage && (
                <div className="birthday-message-container">
                    <div className="birthday-message">
                        {message}
                    </div>
                </div>
            )}

        </>
    );
}

export default Card;