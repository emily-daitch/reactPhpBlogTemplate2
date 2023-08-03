import { createTheme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils';
import { grey } from '@mui/material/colors';

const darkTheme = createTheme(deepmerge({
    palette: {
        mode: 'dark',
        primary: {
            main: '#999999',
            light: '#FFFFFF',
            dark: '#000000',
        },
        background: {
            default: '#333333',
            paper: '#aaaaaa',
        },
        text: {
            primary: grey[300],
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
                backgroundColor: '#b3cde0',
                borderWidth: 15,
                borderColor: '#000000',
                color: '#55555'
              },
            }
        },
    }
}))
export default darkTheme