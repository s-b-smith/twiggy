import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import WigglyCurves from './fonts/WigglyCurvesRegular.ttf';

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'WigglyCurves'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
              @font-face {
                font-family: 'WigglyCurves';
                font-style: normal;
                src: url(${WigglyCurves}) format('truetype');
              }
            `
      }
    }
  })
);

export default theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
