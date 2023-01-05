import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../components/home';
import { BookRoutes } from './BookRoutes';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Contact from '../components/contact';

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
        }
      ])
  return (
    <>{ element }</>
  )
}