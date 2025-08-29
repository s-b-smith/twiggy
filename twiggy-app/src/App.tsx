import { CssBaseline } from '@mui/material';
import EditorContent from 'components/EditorContent';
import EditorWrapper from 'components/EditorWrapper';
import { AppPath } from 'constants/app';
import NavDrawer from 'pages/NavDrawer';
import AppProviders from 'providers/AppProviders';
import { Route, Routes } from 'react-router';

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
