import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  body: '#fff',
  text: '#363537',
  background: '#999',
  colors: {
    default: '#333',
    warning: '#ff3634',
    info: '#167df6',
    success: '#5cb85c',
  },
  breakpoints: {
    sm: '(max-width: 420px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1300px)',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.875rem',
    xxxxl: '2.25rem',
    xxxxxl: '3rem',
    xxxxxxl: '4rem',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
