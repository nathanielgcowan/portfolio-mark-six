import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinkBars() {

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
        </>
    )
}