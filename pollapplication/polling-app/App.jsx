import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Theme from './src/styles/theme';
import Routes from './src/routes/Routes';

const App = () => (
  <>
    <ThemeProvider theme={Theme}>
      <CSSReset />
      <Routes />
    </ThemeProvider>
  </>
);

export default App;
