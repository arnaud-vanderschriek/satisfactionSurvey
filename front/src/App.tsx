import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import HomePage from './components/homePage/HomePage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
