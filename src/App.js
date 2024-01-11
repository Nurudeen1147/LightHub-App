import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Grid from '@mui/material/Grid';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './components/HomePage/HomePage';
import Studentlogin from './components/LoginPage/Studentlogin';
import Studentsignup from './components/LoginPage/Studentsignup';
import Superlogin from './components/LoginPage/Superlogin';
//import NoPage from './components/NoPage/NoPage';
import Dashboard from './components/MenuBar/DashBoard';
import Header from './components/common/HeaderHP/Header';


// function App() {
//   return (
//     <Grid> 
//       <Dashboard />
//     </Grid>

// );
// }

// export default App;
          // <div>
          function App() {
            return (
                <BrowserRouter>
                  {/* <Header /> */}
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Studentlogin />} />
                    <Route path="/signup" element={<Studentsignup />} />
                    <Route path="/slogin" element={<Superlogin />} />
                  </Routes>
                </BrowserRouter>
              );
            };
          ReactDOM.render(<App />, document.getElementById('root'));
          export default App;
