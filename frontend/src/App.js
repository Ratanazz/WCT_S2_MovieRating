import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent'; 
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import AdminCRUD from './pages/AdminCRUD';
import News from './pages/News';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/LoginPage';
import Register from './pages/Register';
import { AuthProvider } from './components/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/admincrud" element={<AdminCRUD />} />
        <Route path="/news" element={<News />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;