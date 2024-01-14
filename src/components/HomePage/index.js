import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Studentlogin from '../LoginPage/Studentlogin';
import Studentsignup from '../LoginPage/Studentsignup';
import Superlogin from '../LoginPage/Superlogin';

function HomePageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Studentlogin />} />
      <Route path="signup" element={<Studentsignup />} />
      <Route path="slogin" element={<Superlogin />} />
    </Routes>
  );
}

export default HomePageRoutes;