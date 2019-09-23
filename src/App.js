import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router';

import Header from './Components/Header';
import GlobalStyles from './Styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
