import React, { Component } from 'react';
import logo from '../res/FinalLogo.png';

class Navbar extends Component {
    background_style = () => {
        return {
            backgroundImage: "linear-gradient(120deg, #0371e4, #0a85fe)"
            /* backgroundColor: "#e3163d" */
        }
    }

    container_style = () => {
        return {
            display: "grid",
            justifyContent: "center"
        }
    }

    upper_style = () => {
        return {

        }
    }

    logo_style = () => {
        return {
            width: "50%"
        }
    }

    lower_style = () => {
        return {
        }
    }

    list_style = () => {
        return {
            padding: "0px !important",
            margin: "0px !important"
        }
    }

    buttons_style = () => {
        return {

        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light mb-4" style={this.background_style()}>
                <div className="container" style={this.container_style()}>
                    <div style={this.upper_style()}>
                        <img className='m-4' src={logo} alt="SpaceNearby Logo" href="#" style={this.logo_style()}></img>
                    </div>

                    <div className="collapse navbar-collapse" style={this.lower_style()}>
                        <ul className="navbar-nav ml-auto button-nav" style={this.list_style()}>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4">
                                    <a href="/">About</a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4">
                                    <a href="/search">Search</a>
                                </button>
                            </li>

                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4">
                                    <a href="/whatshot">What's Hot</a>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary mx-4">
                                    <a href="/nearyou">Near You</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;