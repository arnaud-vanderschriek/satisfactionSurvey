import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import Dashboard from './components/homePage/Dashboard';
import UserForm from './components/reusable/userForm/UserForm';
import TechForm from './components/reusable/techForm/TechForm';
import Survey from './components/Survey/Survey';
import PutmanServicesContainer from './components/reusable/putmanServices/PutmanServicesContainer';
import React from 'react';
import Infratec2Container from './components/reusable/infratec2/Infratec2Container';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path='/putmanServices' element={<PutmanServicesContainer/>} />
        <Route path='/infratec2' element={<Infratec2Container/>} />
        <Route path='/userForm' element={<UserForm/>} />
        <Route path='/techForm' element={<TechForm/>} />
        <Route path='/survey' element={<Survey/>} />
      </Routes> 
    </Router>
  );
}

export default App;
