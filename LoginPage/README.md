Basic login page that I wrote for an application that I am working on. Uses [Chakra UI](https://chakra-ui.com/getting-started) as a base framework.

Here is a stripped down version of my app.js for this project

```
import React, { useState } from 'react';
import './App.css';
import Nav from './components/NavBar'
import Login from './components/login'
import theme from './theme'

import {
  ChakraProvider
} from '@chakra-ui/react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <ChakraProvider theme={theme}>
      {isLoggedIn ? (
        <Nav handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )};
    </ChakraProvider>
  );
}

export default App;

```
