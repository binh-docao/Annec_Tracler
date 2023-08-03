import { Link } from "react-router-dom";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <nav className="navbar fixed-bottom bg-dark justify-content-center">
            <a className="navbar-brand text-white text-bold " href="/"> Copyright © 2023</a>
        </nav>
    )
}

export default Footer
