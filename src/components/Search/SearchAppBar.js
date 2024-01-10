import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Search from './SearchBar';
import SearchIconWrapper from './SearchIconWrapper';
import StyledInputBase from './StyledInputBase';
import Grid from '@mui/material/Grid';
import './SearchAppBar.css'


export default function SearchAppBar() {
  const appBarStyles = {
    backgroundColor: '#B2BABB', // Set the desired background color
    height: '20px', // Set the desired height
    padding: '10px 0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
    marginTop: '0px',
  };
  return (
    //<div style={appBarStyles}>
    //<Grid container justifyContent="space-between" >
    <Grid>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <div className='appbar'>
          <Toolbar>
          <div className="toolbar">

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Course Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            </div>
          </Toolbar>
          </div>
        </AppBar>
      </Box>
     </Grid> 
     //</div>
    );
  };