import { CssBaseline, ThemeProvider } from '@mui/material';
import NavDrawer from './components/NavDrawer';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDrawer />
    </ThemeProvider>
  );
};

export default App;
