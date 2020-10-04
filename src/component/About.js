import React from 'react';
import Layout from './Layout'
import Iframe from 'react-iframe'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: [],
            location: {},
            currLoc: "Hamilton",
            input : "Enter Location...",
            rad_input : 50000,
            radius : 50000 // 50km
        }
    }
    componentDidMount() {
        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    location: position.coords,
                    currLoc : position.coords.latitude + ',' + position.coords.longitude
                    //currLoc : "toronto"
                })
            });
        }
        // console.log("Location " + this.state.location.latitude + " " + this.state.location.longitude);
        // console.log("CURRLOC" + this.state.currLoc);
    }
    
    location_input_style = () => {
        return {
            position: "Absolute",
            top: "40%",
            right: "50%",
            paddingBottom: "30px"

        }
    }
    rad_input_style = () => {
        return {
            position: "Absolute",
            top: "60%",
            right: "50%",
            paddingBottom: "30px"

        }
    }
    text_box_attrib = () => {
        return{
            autofocus : "false",
            resize : "none",
            width : "300px",
            height : "30px",
            margin : "5px"
        }
    }
    render() {
        return (
            <div>                

                <Layout>
                    <h2>Welcome to Space Nearby!</h2>
                    <p>This web application allows you to explore nearby space research and development centres, right in your backyard!</p>

                    <Iframe src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAPHaPH5VuQOqpUdh_9Fd55cduWiybq4qs&q=${this.state.currLoc}`}
                        width="450px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        frameborder="0"
                        allowfullscreen>   
                    </Iframe>
                

                </Layout>
                <div className="container" style={this.location_input_style()}>
                    <div>
                        <h3>Current Location:</h3>
                        <p>We think you're here: <b>{this.state.currLoc}</b></p>
                        <input type="text" onChange={(e)=>this.setState({input : e.target.value})} id="input-text" style={this.text_box_attrib()} placeholder={"Enter Location..."}/>
                        <input type="button" className="btn btn-outline-primary" value="Submit" onClick={()=>this.setState({currLoc : this.state.input})}/>
                    </div>
                    <div>
                        <input type="button" class="btn btn-outline-success" value="Back to my Location" onClick={function(){
                            this.setState({currLoc : `${this.state.location.latitude},${this.state.location.longitude}`})
                            document.getElementById("input-text").value = "";
                        }.bind(this)}/>
                    </div>
                </div>
                <div className="container" style={this.rad_input_style()}>
                        <h3>Current Radius:</h3>
                        <p><b>{this.state.radius} meter(s)</b></p>
                        <input type="text" onChange={(e)=>this.setState({rad_input : e.target.value})} id="input-text" style={this.text_box_attrib()} placeholder={"Enter Radius..."}/>
                        <input type="button" className="btn btn-outline-danger" value="Submit" onClick={function(){
                            if(this.state.rad_input <= 1 || isNaN(this.state.rad_input)) return;
                            this.setState({radius : Math.floor(this.state.rad_input)})
                            }.bind(this)}/>
                    </div>
            </div>
        
        )
    }
}


export default About

