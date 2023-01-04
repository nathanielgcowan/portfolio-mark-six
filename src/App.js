import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import BookList from './components/BookList';
import Book from './components/Book';

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
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/books' element={< BookList />}></Route>
          <Route exact path='/books/id' element={< Book />}></Route>
        </Routes>

    </div>
  );
}

export default App;
