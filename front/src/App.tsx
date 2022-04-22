import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import Dashboard from './components/workerhomePage/Dashboard';
import DashboardPm from './components/pmDashboard/Dashboard';
import UserForm from './components/reusable/userForm/UserForm';
import TechForm from './components/reusable/techForm/worker/WorkerContainer';
import Opinion from './components/reusable/techForm/worker/OpinionOnWorker'
import React from 'react';
import RedirectionContainer from './components/redirectionContainer/RedirectionContainer';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path='/pmHome' element={<DashboardPm/>} />
        <Route path='/redirect' element={<RedirectionContainer/>} />
        <Route path='/userForm' element={<UserForm/>} />
        <Route path='/techForm' element={<TechForm/>} />
        <Route path='/opinion' element={<Opinion/>} />
      </Routes> 
    </Router>
  );
}

export default App;
