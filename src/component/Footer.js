import React, { Component } from "react";

class Footer extends Component
{
    total_style = () => 
    {
        return {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#838383",
            width: "100%",
            height: "100px",
            padding: "0px",
            margin: "0px"
        }
    };

    column_style = () => 
    {
        return {
            backgroundColor: "#838383",
            width: "100%",
            height: "400px"
        }
    };

    link_style = () => 
    {
        return {
            textDecoration: "none",
            color: "white"
        }
    };

    render()
    {
        return(
            <div className="total" style={this.total_style()}>
                <div className="column" style={this.column_style()}>
                    <h5>Christopher Andrade</h5>
                </div>
                <div className="column" style={this.column_style()}>
                    <a href="https://github.com/bentvelj/SpaceApps2020" className="link">Github</a>
                    <a href="https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/details" className="link">NASA Challenge</a>
                    <a href="">Dataset</a>
                </div>
            </div>
        )
    }
}

export default Footer;