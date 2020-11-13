import React from 'react';
import Home from './components/Home/index';
import AboutUs from './components/About us/index'
import ContactUs from './components/Contact us/index';
import Donate from './components/Donate/index';
import {ThemeProvider} from '@material-ui/core/styles';
import {Route} from 'react-router-dom'

import theme from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={AboutUs}
        />
        <Route
          path="/contact"
          component={ContactUs}
        />
        <Route
          path="/donate"
          component={Donate}
        />
        </>
    </ThemeProvider>
    
  );
}

export default App;
