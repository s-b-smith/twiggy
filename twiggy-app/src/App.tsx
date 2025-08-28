import { CssBaseline } from '@mui/material';
import NavDrawer from 'pages/NavDrawer';
import EditorWrapper from 'components/EditorWrapper';
import { Route, Routes } from 'react-router';
import EditorContent from 'components/EditorContent';
import AppProviders from 'providers/AppProviders';
import { AppPath } from 'constants/app';

const App = () => {
  const validPaths = Object.values(AppPath);
  const wrapper = <EditorWrapper />;
  const content = <EditorContent />;

  return (
    <AppProviders>
      <CssBaseline />
      <NavDrawer />
      <Routes>
        <Route path="/" element={wrapper}>
          {validPaths.map(path => (
            <Route key={path} path={path} element={content} />
          ))}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </AppProviders>
  );
};

export default App;
