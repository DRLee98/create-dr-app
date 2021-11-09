import React from 'react';
import Router from './router';
import StyleProvider from './styled';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <StyleProvider>
        <Router />
      </StyleProvider>
    </HelmetProvider>
  );
}

export default App;
