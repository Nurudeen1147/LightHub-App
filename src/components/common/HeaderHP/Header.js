import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import theme from './theme';
import CommonButton from '../commonbutton/CommonButton';
import './HeaderAppBar.css'
import Grid from '@mui/material/Grid';
import logo from './LightHubLogo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const buttonStyles1 = {
        fontSize: '13px',
        fontWeight: 700,
        borderRadius: 1.5,
        width: '10%',
        color: '#a9a9a9a',
        marginTop: "-15px",
        marginLeft: '83%',
        // display: 'flex',
        // justifyContent: 'flex-end',



        textTransform: 'capitalize',
        //justifyContent: 'flex-end',
        '&.MuiButton-contained': {
            backgroundColor: '#2F6C7E', 
            borderColor: '#2F6C7E',
            '&:hover': {
            backgroundColor: '#6b739e',
            },
    
        },
    }
  return (
    <Grid>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
      <div className='appbars'>
        <Toolbar>
            <div>
        <img src={logo} alt={logo} style={{ width: '250px', marginTop: '-50px', marginLeft: '-60px' }} />
        </div>
          <Typography variant="h3" component="h1" marginTop="-120px" marginLeft='-60px'>
            <b><i>LightHub</i></b>

            </Typography>
          
        </Toolbar>
        </div>
        {/* <div className='signinlogin'> */}
        <div>
            <CommonButton
            size='small'
            variant='contained'
            sx={buttonStyles1}
            >
              <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                <i>Signup/Login</i>
              </Link>
              
            </CommonButton>
            </div>
      </AppBar>
    </ThemeProvider>
    </Grid>
  );

};

export default Header;