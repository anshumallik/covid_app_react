import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/">Covid</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/covidstatewise">Covid Statewise</NavLink>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;
