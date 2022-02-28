import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import Dashboard from './components/homePage/Dashboard';
import UserForm from './components/reusable/userForm/UserForm';
import TechForm from './components/reusable/techForm/TechForm';
import Survey from './components/Survey/Survey';
import Worker from './components/reusable/worker/WorkerContainer';
import React from 'react';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path='/worker' element={<Worker/>} />
        <Route path='/userForm' element={<UserForm/>} />
        <Route path='/techForm' element={<TechForm/>} />
        <Route path='/survey' element={<Survey/>} />
      </Routes> 
    </Router>
  );
}

export default App;
