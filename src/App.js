import React from 'react';
import Home from './components/Home/index';
import AboutUs from './components/About us/index'
import {ThemeProvider} from '@material-ui/core/styles';
import {Route} from 'react-router-dom'

import theme from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <>
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/about"
          component={AboutUs}
        />
        </>
    </ThemeProvider>
    
  );
}

export default App;
