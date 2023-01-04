import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';

function App() {
  return (
    <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>

    </div>
  );
}

export default App;
