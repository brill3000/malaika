import React from 'react';
import Home from './components/home';
import {ThemeProvider} from '@material-ui/core/styles';

import theme from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <>
         <Home/>
        </>
    </ThemeProvider>
    
  );
}

export default App;
