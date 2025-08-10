import { CssBaseline, ThemeProvider } from '@mui/material';
import NavDrawer from './components/NavDrawer';
import theme from './theme';
import StickFigureEditor from './components/StickFigureEditor';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDrawer />
      <StickFigureEditor />
    </ThemeProvider>
  );
};

export default App;
