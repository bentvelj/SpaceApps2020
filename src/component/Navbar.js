import React from 'react';
import { Route } from 'react-router-dom'
import logo from '../res/logo.png';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
<<<<<<< HEAD
                <div className="container my-4">
                    <a className="navbar-brand" href="#">SpaceApps2020</a>
=======
                <div className="container">
                    <img src={logo} alt="SpaceNearby Logo" href="#"></img>
>>>>>>> f5795bf8c5cc8e9d6afde28a520015d81fe20ade
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navbar;