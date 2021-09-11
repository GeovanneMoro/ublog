import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/ublog">
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
