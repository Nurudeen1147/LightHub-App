import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import logo from './LightHubLogo1.png';

const descrip1 = [{description1:['     Lecture Videos','     Ebooks', '', '']}];
const descrip2 = [{description2:['     Lecture Videos', '     Ebooks', '     Extra Tutorial Videos', '     Other course materials']}];
// const description2 = [Lecture Videos, Ebooks, Extra Tutorial Videos, Other relevance course materials];

const defaultTheme = createTheme();

export default function Fees() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, height: 110}} 
      >
        <Toolbar sx={{ marginTop: '-20px', flexWrap: 'wrap' }}>
        <div><img src={logo} alt={logo} style={{ width: '150px', marginBottom: '-40px', marginLeft: '-25px' }} />
      </div>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1, marginLeft: '-35px' }}>
            <b>LightHub</b>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 4, pb: 6 }}>
        <Typography
          component="h4"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          marginTop="-20px"
          marginBottom="-5px"
        >
          Fee
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p" marginBottom="-20px" >
          Choose the method you would like to take the course. 
          It&apos;s best to pay a token for the unlimited access to the course materials.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" display='flex' justifyContent='center'>
            <Grid
              item
            //   key={title}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title='Free'
                  subheader='Limited Access'
                  titleTypographyProps={{ align: 'center' }}
                //   action={ 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 1,
                      mt: -2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      $0
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /1yr
                    </Typography>
                  </Box>
                  <ul style={{ paddingLeft: '16px' }}>
                  {descrip1[0].description1.map((item, index) => (
                    <li key={index}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        align="left"
                        marginRight='80%'
                        marginLeft='10%'
                      >
                        <span>&#10003;{item}</span>
                      </Typography>
                    </li>
                  ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant='contained'>
                  <b>Apply for free</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid
              item
            //   key={title}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title='Priced'
                  subheader='Unlimited Access'
                  titleTypographyProps={{ align: 'center' }}
                  action= {<StarIcon />}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 1,
                      mt: -2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      $0.99
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /20yr
                    </Typography>
                  </Box>
                  <ul>
                  {descrip2[0].description2.map((item1, index1) => (
                    <li key={index1}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        align="left"
                        marginRight='80%'
                        marginLeft='10%'
                      >
                      <span>{   }  &#10003;{item1}</span> 
                      </Typography>
                    </li>
                  ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant='contained'>
                  <b>Make Payment</b>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}