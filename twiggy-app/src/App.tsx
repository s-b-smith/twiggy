import { CssBaseline, ThemeProvider } from '@mui/material';
import NavDrawer from './components/NavDrawer';
import theme from './theme';
import StickFigureEditor from './components/StickFigureEditor';
import { useState } from 'react';

const App = () => {
  const [isNavDrawerOpen, setNavDrawerOpen] = useState<boolean>(true);
  const navDrawerProps = {
    isNavDrawerOpen,
    setNavDrawerOpen
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDrawer {...navDrawerProps} />
      <StickFigureEditor {...navDrawerProps} />
    </ThemeProvider>
  );
};

export default App;
