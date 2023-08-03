import { Link } from "react-router-dom";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <nav className="navbar sticky-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white text-bold" href="/">ANNEC Tracker</a>
                <div class="d-flex justify-content-between">
                </div>
            </div>
        </nav>
    )
}

export default Header;