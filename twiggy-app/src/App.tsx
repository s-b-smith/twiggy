import { CssBaseline, ThemeProvider } from '@mui/material';
import NavDrawer from './pages/NavDrawer';
import theme from './theme';
import EditorWrapper from './components/EditorWrapper';
import { Route, Routes } from 'react-router';
import EditorContent from 'components/EditorContent';

export enum AppPaths {
  Home = '',
  Body = '/body',
  Clothes = '/clothes',
  Color = '/color',
  Background = '/background'
}

const App = () => {
  const validPaths = Object.values(AppPaths);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDrawer />
      <Routes>
        <Route path="/" element={<EditorWrapper />}>
          {validPaths.map(path => (
            <Route key={path} path={path} element={<EditorContent />} />
          ))}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
