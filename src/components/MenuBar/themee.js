import { createTheme } from '@mui/material/styles';

export const createCustomTheme = () => {
  let theme = createTheme({
    palette: {
      primary: {
        light: '#63ccff',
        main: '#2F6C7E;',   //Dashboard-Header bgcolor 
        dark: '#006db3',
      },
    },

    mixins: {              //Dashboard-Header toolbar height 
      toolbar: {
        minHeight: 38,
      },
    },
  });

  theme = {
    ...theme,
    components: {

      MuiButton: {        //Dashboard-Header Profile button 
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
          contained: {
            boxShadow: 'none',
            '&:active': {
              boxShadow: 'none',
            },
          },
        },
      },

    },
  };

  return theme;
};