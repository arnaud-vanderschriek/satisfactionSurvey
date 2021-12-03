import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import HomePage from './components/homePage/HomePage';
import UserForm from './components/reusable/userForm/UserForm';
import TechForm from './components/reusable/techForm/TechForm';
import React from 'react';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path='/userForm' element={<UserForm/>} />
        <Route path='/techForm' element={<TechForm/>} />
      </Routes> 
    </Router>
  );
}

export default App;
