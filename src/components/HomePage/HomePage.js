import React from 'react';
import './HomePage.css';
import Grid from '@mui/material/Grid';
//import './script.js';
import CommonButton from '../common/commonbutton/CommonButton';
import SearchAppBar from '../Search/SearchAppBar';
import Header from '../common/HeaderHP/Header';
import founder1 from './Co-Founder 1.png';
import founder2 from './Co-Founder 2.png';
import founder3 from './Co-Founder 3.png';
import founder4 from './Co-Founder 4.png';
import Slide from '../common/ImageSlide/slide';
import { Link, Element } from 'react-scroll';
import ContactUs from '../ContactUs/Contactus';
import Availcourses from '../AvailCourse/Availcourses';
import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://yahoo.com/">
      LightHub E-Learning Platform
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'} .All rights reserved
  </Typography>
    );
  }

const HomePage = () => {
            const buttonStyles = {
            fontSize: '12px',
            fontWeight: 700,
            borderRadius: 1.5,
            color: '#000',
            textTransform: 'capitalize',
            '&.MuiButton-contained': {
                backgroundColor: '#B2BABB', 
                borderColor: '#B2BABB',
                marginBottom: '2px',
                //margin: '0 20px',
                '&:hover': {
                backgroundColor: '#f1f6f7',
                },
            },
        }
            return (
                
     // <nav>
      //  <ul>
        //  <li><a href="Course.html" target="_blank">Available courses</a></li>
         // <li><a href="#about">About Us</a></li>
          //<li><a href="#contact">Our Contact</a></li>
          //<li><a href="#founders">Co-founders</a></li>
        //</ul>
      //</nav>

      <React.Fragment>
      <header> 
        <Header />
      </header>                
    <Grid>
        <nav>
            <CommonButton
            //size='small'
            variant='contained'
            sx={buttonStyles}
            >
                <Availcourses/>
            </CommonButton>
            <CommonButton
                //size='small'
                variant='contained'
                sx={buttonStyles}
            >
                <Link to="about" smooth={true} duration={500}>
                <i>About Us</i>
                </Link>
            </CommonButton>
            <CommonButton
                //size='small'
                variant='contained'
                sx={buttonStyles}
            >
                <ContactUs/>
            </CommonButton>
            <CommonButton
                //size='small'
                variant='contained'
                sx={buttonStyles}
            >
                <Link to="founders" smooth={true} duration={500}>
                <i>Co-founders</i>
                </Link>
            </CommonButton>
            <SearchAppBar />            
        </nav>       
    </Grid>
    <ul>
      <h2>Welcome to LightHub E-Learning Platform</h2>
    </ul>
      <section id="courses">
        <div className="Course-Header">
          <h3><i>Our Courses</i></h3>
          <p>Check our courses out and apply for one today. We present certification of attendance and certification of completion when you apply for a course on LightHub. LightHub will provide all the necessary learning materials like ebooks, tutorial videos, collaboration sessions required to make you complete every course successfully.</p>
        </div>
        <div >
          <Slide />
        </div>
      </section>
      <Element id="about">
        <div className="About-Header">
          <h3><i>About LightHub</i></h3>
        </div>
        <p>LightHub is a platform for non-students, students, and graduates to access educational resources, engage in interactive learning activities with their tutors, and communicate with their peers.</p>
      </Element>
      <Element id="founders">
        <div className="Founder-Header">
          <h3><i>Our Co-founders</i></h3>
        </div>
        <div className="founder-item">
          <div className="Co-f">
            <img src={founder1} alt={founder1} className="round-border" />
            <div className="Co-founder name">
              <h4>Chiamaka Nwobodo</h4>
              <p><i>Co-founder</i></p>
            </div>
          </div>
          <div className="Co-f">
            <img src={founder2} alt={founder2} className="round-border" /> 
            <div className="Co-founder name">
              <h4>Saheed Ololade</h4>
              <p><i>Co-founder</i></p>
            </div>
          </div>
          <div className="Co-f">
            <img src={founder3} alt={founder3} className="round-border" />
            <div className="Co-founder name">
              <h4>Aanuoluwapo Shodipo</h4>
              <p><i>Co-founder</i></p>
            </div>
          </div>
          <div className="Co-f">
            <img src={founder4} alt={founder4} className="round-border" />
            <div className="Co-founder name">
              <h4>Nurudeen Oyelowo</h4>
              <p><i>Co-founder</i></p>
            </div>
          </div>
        </div>
      </Element>
      <footer>
      <Copyright sx={{ mt: 1, color: 'white' }} />
      </footer>
    </React.Fragment>
  )
};

export default HomePage;