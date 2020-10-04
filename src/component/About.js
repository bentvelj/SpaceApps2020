import React from 'react';
import Layout from './Layout'
import Iframe from 'react-iframe'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: [],
            location: {}
        }
    }
    componentDidMount() {
        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    location: position.coords
                })
            });
        }
        console.log(this.state.location);
    }
    render() {
        return (
            <div>
                <Layout>
                    <h2>Welcome to Space Nearby!</h2>
                    <p>This web application allows you to explore nearby space research and development centres, right in your backyard!</p>

                    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                        width="450px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        frameborder="0"
                        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAPHaPH5VuQOqpUdh_9Fd55cduWiybq4qs&q=${this.state.location.latitude}, ${this.state.location.longitude}`} allowfullscreen></Iframe>
                </Layout>

            </div>
        )
    }
}






export default About

