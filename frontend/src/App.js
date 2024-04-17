
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarr from './components/Navbarr';
function App() {
  return (
    <Router>
      <Navbarr/>
      {/* <Route exact path="/" component={Home} /> */}
    </Router>
  );
}

export default App;
