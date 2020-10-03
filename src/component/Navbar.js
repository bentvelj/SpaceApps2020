import React, { Component } from 'react';
import logo from '../res/FinalLogo.png';

class Navbar extends Component
{
    background_style = () =>
    {
        return {
             /* backgroundImage: "linear-gradient(120deg, #a30cd0, #940db9)" */
            backgroundColor: "#038BE3",
        }
    }

    container_style = () =>
    {
        return {
            display: "grid"
        }
    }

    upper_style = () =>
    {
        return {
            width: "100%"
        }
    }

    logo_style = () =>
    {
        return {
            width: "40%"
        }
    }

    lower_style = () =>
    {
        return {
            width: "400px"
        }
    }
    
    buttons_style = () =>
    {
        return {

        }
    }

    render()
    {
        return (
            <nav className="navbar navbar-expand navbar-light mb-4" style={this.background_style()}>
                <div className="container" style={this.container_style()}>
                    <div style={this.upper_style()}>
                        <img className='m-4' src={logo} alt="SpaceNearby Logo" href="#" style={this.logo_style()}></img>
                    </div>

                    <div className="collapse navbar-collapse" style={this.lower_style()}>
                        <ul className="navbar-nav ml-auto button-nav">
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
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;