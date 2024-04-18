import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbarr'; 
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;