import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import store from 'store/store';
import theme from 'theme';

const AppProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProviders;
