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
            input : ""
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
    
    info_box_style = () => {
        return {
            position: "Absolute",
            top: "50%",
            right: "50%",
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
                <div className="container" style={this.info_box_style()}>
                    <div>
                        <h3>Current Location:</h3>
                        <p>We think you're here: <b>{this.state.currLoc}</b></p>
                        <input type="text" onChange={(e)=>this.setState({input : e.target.value})} style={this.text_box_attrib()} placeholder="Enter location..."/>
                        <input type="button" className="btn btn-outline-primary" value="Submit" onClick={()=>this.setState({currLoc : this.state.input})}/>
                        
                    </div>
                </div>
            </div>
        
        )
    }
}


export default About

