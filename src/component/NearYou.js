import React from 'react';
import Layout from './Layout';


class NearYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: [],
            location: {
                lat: 0,
                lon: 0
            }
        }
    }
    componentDidMount() {
        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            });
        }

        var curPos = new google.maps.LatLng(-33.867, 151.195);

    }

    render() {
        // console.log(this.state.pic)
        return (
            <div>
                <Layout>
                    <div className="container">


                    </div>
                </Layout>
                <script defer
                    src="https://maps.googleapis.com/maps/api/js?libraries=places
                    &key=AIzaSyAPHaPH5VuQOqpUdh_9Fd55cduWiybq4qs&callback=initMap">
                </script>
            </div >
        )

    }

}

export default NearYou