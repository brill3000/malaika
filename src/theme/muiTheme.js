import { createMuiTheme } from '@material-ui/core/styles';
import {teal, purple} from '@material-ui/core/colors'
const theme = createMuiTheme({

  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[800],
      contrastText: '#ffffff',
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[800],
      contrastText: '#ffffff',
    },
  },
    shape: {
      borderRadius: 5,
    },
    typography: {
      useNextVariants: true,
      button: {
        textTransform: 'none',
        fontFamily: 'Optima',
      },
      fontFamily: 'Optima',
    },
    
});
export default theme;
