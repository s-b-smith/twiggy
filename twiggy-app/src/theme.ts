import { createTheme, responsiveFontSizes } from '@mui/material';
import createMixins from '@mui/material/styles/createMixins';
import Moskitoes from 'fonts/Moskitoes.ttf';
import MoskitoesShadow from 'fonts/MoskitoesShadow.ttf';
import SunnySpells from 'fonts/SunnySpells.ttf';
import TheFountainOfWishes from 'fonts/TheFountainOfWishes.ttf';
import WigglyCurves from 'fonts/WigglyCurvesRegular.ttf';

export const Fonts = {
  WigglyCurves,
  SunnySpells,
  Moskitoes,
  MoskitoesShadow,
  TheFountainOfWishes
};

const { breakpoints } = createTheme();
const mixins = createMixins(breakpoints, {
  toolbar: {
    minHeight: 61,
    [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
      minHeight: 53
    },
    [breakpoints.up('sm')]: {
      minHeight: 69
    }
  }
});

const theme = responsiveFontSizes(
  createTheme({
    mixins,
    components: {
      MuiSvgIcon: {
        defaultProps: {
          fontSize: 'large'
        }
      },
      MuiCssBaseline: {
        styleOverrides: `
              @font-face {
                font-family: 'WigglyCurves';
                font-style: normal;
                src: url(${WigglyCurves}) format('truetype');
              }
              @font-face {
                font-family: 'SunnySpells';
                font-style: normal;
                src: url(${SunnySpells}) format('truetype');
              }
              @font-face {
                font-family: 'Moskitoes';
                font-style: normal;
                src: url(${Moskitoes}) format('truetype');
              }
              @font-face {
                font-family: 'MoskitoesShadow';
                font-style: normal;
                src: url(${MoskitoesShadow}) format('truetype');
              }
              @font-face {
                font-family: 'TheFountainOfWishes';
                font-style: normal;
                src: url(${TheFountainOfWishes}) format('truetype');
              }
            `
      }
    }
  })
);

export default theme;
