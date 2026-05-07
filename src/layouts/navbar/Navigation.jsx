import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link to="/">Home</Link>
            <Link to="/sidebar">Sidebar</Link>
            <Link to="/tracker-2">Tracker 2</Link>
        </nav>
    )
}
