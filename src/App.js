import React from 'react';
import Header from './components/header';
import Main from './components/main';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <Main/>
    </GlobalProvider>
  )
}

export default App