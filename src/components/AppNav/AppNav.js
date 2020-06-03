import React from 'react';
import './AppNav.css';
import {NavLink} from 'react-router-dom';

const AppNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-costum">
            <div className="nav">
            <NavLink className="navbar-brand" activeClassName="disable" to="/">Navbar</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink className="nav-link" activeClassName="disable" to="/APICharacter">API_Character</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="disable" to="/">Opcion 2</NavLink>
                    </li>
                </ul>
            </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="disable" to="/new-user">Sign Up</NavLink>
                    </li>
                    <li className="nav-item">    
                        <NavLink className="nav-link" activeClassName="disable" to="/login">Sign In</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default AppNav

/*

        <nav className="navbar navbar-expand-lg navbar-light navbar-costum">
            <div className= "nav mr-auto"> 
                <NavLink className="nav-link" activeClassName="disable" to="/">Navbar</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>

            </div>
        </nav>
*/