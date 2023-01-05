import React from 'react'
import { Link, Routes, Route, useRoutes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import BookLayout from './BookLayout';
import { BookRoutes } from './BookRoutes';

function App() {
  // let element = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />
  //   }
  // ])
  return (
    <>  
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to='/books/new'>New Book</Link>
          </li>
        </ul>
        {/* { element } */}
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/books/*' element={<BookRoutes />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

    </>
  );
}

export default App;
