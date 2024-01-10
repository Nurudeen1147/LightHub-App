import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage';
import Studentlogin from './components/LoginPage/Studentlogin';
import Studentsignup from './components/LoginPage/Studentsignup';
import Superlogin from './components/LoginPage/Superlogin';

function Router1() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Studentlogin />} />
        <Route path="/signup" element={<Studentsignup />} />
        <Route path="/slogin" element={<Superlogin />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default Router1;