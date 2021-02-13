import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthContext from './hooks';
import colors from './styles/themes/colors';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <AuthContext>
      <ThemeProvider theme={colors}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AuthContext>
  </Router>
);

export default App;
