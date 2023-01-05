import { Routes, Route } from 'react-router-dom';
import BookList from '../components/BookList';
import Book from '../components/Book';
import NewBook from '../components/NewBook';
import BookLayout from '../layouts/BookLayout';
import NotFound from '../components/NotFound';

export function BookRoutes() {
    return (
        <>
            {/* <BookLayout /> */}
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=':id' element={<Book/>} />
                    <Route path='new' element={<NewBook/>} />
                    <Route path='edit/:id' element={<NewBook/>} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}