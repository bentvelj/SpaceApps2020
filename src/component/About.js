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
            rad_input : 50000
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

    get_new_coords = async (new_address,obj) =>{
        //console.log('IN CALL: ' + this.state.currLoc)
        const addy = new_address.split(' ').join('%20')
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addy}&key=AIzaSyAPHaPH5VuQOqpUdh_9Fd55cduWiybq4qs`)
            .then(response => response.json())
            .then(function(data){

                let lat = data.results[0].geometry.location.lat;
                let lng = data.results[0].geometry.location.lng;
                obj.setState({location: {latitude : lat, longitude : lng}})
            })
    }
    areas_style = () =>
    {
        return{
            position: "absolute",
            left: "65%",
            bottom: "10%",
            width: "550px",
            height: "400px",
            overflowY: "scroll"
        }
    }

    areas_click = () =>
    {
        
    }

    get_locations = async () =>
    {
        let keywords = "Space%20Agency|Astronomy|Space%20Station|NASA|SpaceX|CSA|Planetarium|Launch%20Site";
        let key = "AIzaSyAPHaPH5VuQOqpUdh_9Fd55cduWiybq4qs";
        let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + this.state.location.latitude + "," + this.state.location.longitude + "&radius=" + this.state.rad_input + "&keyword=" + keywords + "&key=" + key;
        let proxy = "https://cors-anywhere.herokuapp.com/";
        let data;
        let locations = [];

        console.log(url);

        await fetch(proxy + url).then(response => response.json()).then(output => { data = output.results});

        for(let index = 0; index < data.length; index++)
        {
            let latitude, longitude, name, address;
            latitude = data[index].geometry.location.lat;
            longitude = data[index].geometry.location.lng;
            name = data[index].name;
            address = data[index].vicinity;
            locations.push([latitude, longitude, name, address]);
        }

        console.log(locations);

        let areas = document.getElementById("areas");
        areas.innerHTML = "";

        for(let index = 0; index < locations.length; index++)
        {
            let element = document.createElement("li");
            console.log(locations[index][2]);
            element.textContent = locations[index][2] + ", " + locations[index][3];
            element.addEventListener("click", this.areas_click);
            areas.appendChild(element);
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
                        <input type="button" className="btn btn-outline-primary" value="Submit" onClick={function(){
                            this.setState({currLoc : this.state.input})
                            this.get_new_coords(this.state.input,this);
                            //new_lat, new_long
                            //this.setState({location : ...})
                            }.bind(this)}/>
                    </div>
                    <div>
                        <input type="button" className="btn btn-outline-success" value="Back to my Location" onClick={function(){
                            this.setState({currLoc : `${this.state.location.latitude},${this.state.location.longitude}`})
                            document.getElementById("input-text").value = "";
                        }.bind(this)}/>
                    </div>
                </div>
                <div className="container" style={this.rad_input_style()}>
                        <h3>Current Radius:</h3>
                        <p><b>{this.state.radius} meter(s)</b></p>
                        <input type="text" onChange={(e)=>this.setState({rad_input : e.target.value})} id="input-text" style={this.text_box_attrib()} placeholder={"Enter Radius..."}/>
                        <input type="button" className="btn btn-outline-danger" value="Submit" onClick={function()
                        {
                            if(this.state.rad_input <= 1 || isNaN(this.state.rad_input)) return;
                            this.setState({radius : Math.floor(this.state.rad_input)})

                            this.get_locations();

                            console.log(document.getElementById("areas"));

                        }.bind(this)}/>
                </div>

                <div style={this.areas_style()}>
                    <nav>
                        <ul id="areas">

                        </ul>
                    </nav>
                </div>
            </div>
        
        )
    }
}


export default About