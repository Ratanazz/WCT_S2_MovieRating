import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbarr'; 
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;