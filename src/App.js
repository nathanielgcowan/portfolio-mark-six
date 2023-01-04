import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';

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
          <Route path='/' element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route path='/books' element={< BookList />}>
            <Route path=':id' element={< Book />}></Route>
            <Route path='new' element={<NewBook />}>New Book</Route>
          </Route>
          <Route path='*' element={<NotFound />}>No Route</Route>
        </Routes>

    </div>
  );
}

export default App;
