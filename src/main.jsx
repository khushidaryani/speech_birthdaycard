// Punto de entrada de la aplicación
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Opciones de tema
const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#D14D72',
    },
    secondary: {
      main: '#FFABAB',
    },
    tertiary: {
      main: '#FCC8D1',
    },
  },
};

// Creamos el tema usando las opciones
const theme = createTheme(themeOptions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App /> {/* Componente principal de la aplicación */}
    </ThemeProvider>
  </StrictMode>,
)