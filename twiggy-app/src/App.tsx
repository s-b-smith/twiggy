import { CssBaseline, ThemeProvider } from '@mui/material';
import NavDrawer from './pages/NavDrawer';
import theme from './theme';
import EditorWrapper from './components/EditorWrapper';
import { Route, Routes } from 'react-router';
import BodyEditor from 'pages/body/BodyEditor';

const App = () => {
  /*
  TODO: Need to render all carousels at once on page load.
        Each route will perform an action to set the active carousel
  */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavDrawer />
      <Routes>
        <Route
          path="/"
          element={<EditorWrapper />}
          action={() => {
            console.log('Test');
          }}
        >
          <Route path="/body" element={<BodyEditor />} />
          <Route path="/clothes" element={<h2>Not built yet</h2>} />
          <Route path="/color" element={<h2>Not built yet</h2>} />
          <Route path="/background" element={<h2>Not built yet</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
          <Route path="" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
