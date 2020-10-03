import React, { Component } from "react";
import git_logo from '../res/git_logo.png';
import challenge_logo from '../res/challenge_logo.png';
import dataset_logo from '../res/dataset_logo.png';

class Footer extends Component {
    total_style = () => {
        return {
            position: "absolute",
            bottom: "0",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#3A3A3A",
            width: "100%",
            height: "200px",
            padding: "50px",
            margin: "0px",
        }
    };

    column_style = () => {
        return {
            display: "grid"
        }
    };

    link_style = () => {
        return {
            textDecoration: "none",
            display: "flex",
            width: "100px",
            right: "100px"
        }
    };

    text_style = () => {
        return {
            margin: "0px",
            color: "#FFFFFF"
        }
    };

    image_style = () =>
    {
        return {
            padding: "5px",
            width: "30%"
        }
    }

    render()
    {
        return(
            <div style={this.total_style()}>
                <div style={this.column_style()}>
                    <h5 style={this.text_style()}></h5>
                    <h5 style={this.text_style()}>Made for NASA SpaceApps Hackathon 2020</h5>
                    <h5 style={this.text_style()}></h5>
                </div>

                <div style={this.column_style()}>
                    <a style={this.link_style()} href="https://github.com/bentvelj/SpaceApps2020">
                        <h5 style={this.text_style()}>Github</h5>
                        <img src={git_logo} style={this.image_style()}></img>
                    </a>

                    <a style={this.link_style()} href="https://2020.spaceappschallenge.org/challenges/connect/space-exploration-your-backyard/details">
                        <h5 style={this.text_style()}>Challenge</h5>
                        <img src={challenge_logo} style={this.image_style()}></img>
                    </a>

                    <a style={this.link_style()} href="">
                        <h5 style={this.text_style()}>Dataset</h5>
                        <img src={dataset_logo} style={this.image_style()}></img>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;