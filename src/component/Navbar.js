import React from 'react';
import { Route } from 'react-router-dom'
import logo from '../res/FinalLogo.png';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light mb-4" style={{ backgroundImage: "linear-gradient(120deg, #1cc4df, #c908a7)" }}>
                <div className="container">
                    <img src={logo} alt="SpaceNearby Logo" href="#" style={{ width: '50%' }}></img>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto button-nav">
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4"><a href="/">About</a></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4"><a href="/search">Search</a></button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4"><a href="/whatshot">What's Hot</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navbar;