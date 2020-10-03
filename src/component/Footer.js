import React, { Component } from "react";

class Footer extends Component
{
    total_style = () => 
    {
        return {
            display: "flex",
            backgroundColor: "#3A3A3A",
            width: "100%",
            height: "200px",
            padding: "50px",
            margin: "0px"
        }
    };

    column_style = () => 
    {
        return {
            display: "grid"
        }
    };

    link_style = () => 
    {
        return {
            textDecoration: "none",
            color: "#FFFFFF"
        }
    };

    text_style = () => 
    {
        return {
            margin: "0px",
            color: "#FFFFFF"
        }
    };

    render()
    {
        return(
            <div className="total" style={this.total_style()}>
                <div className="column" style={this.column_style()}>
                    <h5 className="text" style={this.text_style()}></h5>
                    <h5 className="text" style={this.text_style()}>Made for NASA SpaceApps Hackathon 2020</h5>
                    <h5 className="text" style={this.text_style()}></h5>
                </div>
                <div className="column" style={this.column_style()}>
                    <a href="https://github.com/bentvelj/SpaceApps2020" className="link" style={this.link_style()}>Github</a>
                    <a href="https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/details" className="link" style={this.link_style()}>NASA Challenge</a>
                    <a href="" className="link" style={this.link_style()}>Dataset</a>
                </div>
            </div>
        )
    }
}

export default Footer;