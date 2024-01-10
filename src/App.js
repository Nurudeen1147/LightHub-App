import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './components/HomePage/HomePage';
//import Studentlogin from './components/LoginPage/Studentlogin';
// import Studentsignup from './components/LoginPage/Studentsignup';
//import Superlogin from './components/LoginPage/Superlogin';
//import NoPage from './components/NoPage/NoPage';
import Dashboard from './components/MenuBar/DashBoard';
import Fees from './components/Payment/CoursePayment';


function App() {
  return (
    <Grid> 
      <Dashboard />
      {/* <MenuBar /> */}
      {/* <Outlet /> */}
    </Grid>

);
}

export default App;
          // <div>
      // <Routes>
      //   <Route path="/" element={<HomePage />} />
      //   <Route path="/HomePage" element={<HomePage />} />
      //   <Route path="/Studentlogin" element={<Studentlogin />} />
      //   <Route path="/Studentsignup" element={<Studentsignup />} />
      //   <Route path="/Superlogin" element={<Superlogin />} />
      //   <Route path="/MenuBar" element={<MenuBar />} />
      //   <Route path="*" element={<NoPage />} />
      // </Routes>
      
      // <Outlet />
      // </div>

