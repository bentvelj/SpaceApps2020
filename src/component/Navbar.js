import React from 'react';
import { Route } from 'react-router-dom'
import logo from '../res/FinalLogo.png';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light mb-4" style={{backgroundImage: "linear-gradient(120deg, #a30cd0, #940db9)"}}>
                <div className="container">
                    <img className='m-4' src={logo} alt="SpaceNearby Logo" href="#" style={{width:'35%', textAlign:'center'}}></img>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/whatshot">Whats Hot</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navbar;