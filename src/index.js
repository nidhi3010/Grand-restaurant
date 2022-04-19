import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#000000'
        }
      }
    }
  }
});






ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <App />,
          </ThemeProvider>
        </StyledEngineProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
