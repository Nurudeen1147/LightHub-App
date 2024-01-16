import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ProfileUpdate from '../../../Pages/Profile/Profile';
import Notification from '../../../Pages/Annoucements/Annoucements';
import HelpDialog from '../../../Pages/FAQ/FAQ';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function DBheader(props) {

  const buttonStyles2 = {
    fontSize: '13px',
    fontWeight: 700,
    borderRadius: 1.5,
    color: 'lightColor',
    marginTop: "0px",

}
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0} sx={{ borderRadius: '0px'}}>
        <Toolbar>
          <Grid container spacing={0} alignItems="center" mr={1}>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Help/FAQ">
                <IconButton color="inherit">
                <HelpDialog />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title="Notifications">
                {/* <IconButton color="inherit">
                  <NotificationsIcon /> */}
                  <Notification />
                  {/* </IconButton> */}
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="Nurudeen" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>

        <Toolbar>
          <Grid container alignItems="center" spacing={1} mt={-4}>
          <Grid item xs />
            <Grid item>
              <Button
                sx={{ backgroundColor: 'inherit', '&:hover': {
                  color: 'LightColor',
                },}}
                variant="text"
                color="inherit"
                size="small"
                
              >
                <ProfileUpdate />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>

        <Toolbar>
          <Grid container spacing={1} alignItems="center" mt={-3}>
          <Grid item xs>
              <Typography color="inherit" variant="h8" component="h1">
                <i>Dashboard</i>
              </Typography>
            </Grid>
            <Grid item>
            <Button>
              <Link
                href="/"
                variant="contained"
                size="small"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  marginTop: '10px',
                  fontSize: '15px',
                  fontWeight: 700,
                  borderRadius: 1.5,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                <b><i>Logout</i></b>
              </Link>
              </Button>

            </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default DBheader;