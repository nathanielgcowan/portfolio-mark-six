import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../components/lower/home';
import { BookRoutes } from './BookRoutes';
import NotFound from '../components/lower/NotFound';
import About from '../components/lower/About';
import Contact from '../components/lower/contact';
import Crud from '../crud';

export default function ForApp() {
    let element = useRoutes([
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/books/*',
          element: <BookRoutes />
        },
        {
          path: '*',
          element: <NotFound />
        },
        {
          path: '/crud',
          element: <Crud />
        }
      ])
  return (
    <>{ element }</>
  )
}