import React from 'react'
import { useTheme } from '../utils/hooks'
import './style.css'
const Home = () => {
    const { isDark, toggleTheme } = useTheme();
    return (

        <div data-theme={isDark ? "dark" : "light"}>
            <div className="navbar">
                <div className="navbar-menu">
                    <a href="#contact">Contact</a>
                    <a href="#news">News</a>
                    <a href="#home">Home</a>
                </div>
                <div className="theme-switch">
                    <label className="switch">
                        <input onChange={() => toggleTheme()} type="checkbox" checked={isDark} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="main">
                <h1 className="theme">Theme is {isDark ? "dark" : "light"}</h1>

            </div>
        </div>

    )
}

export default Home
