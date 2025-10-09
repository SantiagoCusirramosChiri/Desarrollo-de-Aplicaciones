import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="hola">experiencia de practica 6</h1>
        <nav>
          <ul className="menu">
            <li><Link to="/home">inicio</Link></li>
            <li><Link to="/about">info</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

