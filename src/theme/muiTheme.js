import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({

  palette: {
    primary: {
      light: '#ffff5f',
      main: '#fcf876',
      dark: '#c8be00',
      contrastText: '#3797a4',
    },
    secondary: {
      light: '#baffed',
      main: '#3797a4',
      dark: '#589b8b',
      contrastText: '#fff',
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