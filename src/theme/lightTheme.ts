import { createTheme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils';
import { grey } from '@mui/material/colors';

const lightTheme = createTheme(deepmerge({
    palette: {
        mode: 'light',
        primary: {
            main: '#555555',
            light: '#000000',
            dark: '#FFFFFF',
          },
          background: {
            default: '#b3cde0',
            paper: '#222222',
          },
          text: {
            primary: grey[900],
          },
    },
    typography: {
        fontFamily: [
          'Oswald',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ].join(','),
        body1: {
          fontFamily: 'Poppins, Arial, sans-serif',
        },
    },
},
{
    components: {
        MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: '#bbbbbb',
                borderWidth: 15,
                borderColor: '#000000',
                color: '#55555'
              },
            }
        },
    }
}))
export default lightTheme