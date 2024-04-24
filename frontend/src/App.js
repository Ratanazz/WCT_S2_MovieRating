import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent'; 
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import AdminCRUD from './pages/AdminCRUD';
import News from './pages/News';
import MovieDetails from './pages/MovieDetails';
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admincrud" element={<AdminCRUD />} />
        <Route path="/news" element={<News />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;