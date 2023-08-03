import { Link } from "react-router-dom";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const GuestHeader = () => {
    return (
        <nav className="navbar sticky-top bg-dark bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand text-white text-bold" href="/">ANNEC Finder</a>
                <div class="d-flex justify-content-between">

                <Link role="button" to="/binh" class="btn btn-danger me-3">Binh</Link>
                <Link role="button" to="/davis" class="btn btn-danger me-3">Davis</Link>
                <Link role="button" to="/nico" class="btn btn-danger me-3">Nico</Link>
                <Link role="button" to="/sydney" class="btn btn-danger me-3">Sydney</Link>
                </div>
            </div>
        </nav>
    )
}

export default GuestHeader;