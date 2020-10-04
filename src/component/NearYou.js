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


        // var sydney = new google.maps.LatLng(-33.867, 151.195);
        // const pyrmont = { lat: -33.866, lng: 151.196 };
        // const service = new google.maps.places.PlacesService(map);
        // service.nearbySearch(
        //     { location: pyrmont, radius: 50, type: "store" },
        //     (results, status, pagination) => {
        //         if (status !== "OK") return;
        //         createMarkers(results, map);
        //         // moreButton.disabled = !pagination.hasNextPage;

        //         if (pagination.hasNextPage) {
        //             // getNextPage = pagination.nextPage;
        //         }
        //     }
        // );

    }

    render() {
        console.log(this.state.location)
        return (
            <div>
                <Layout>
                    <div className="container">
                        <div id="map"></div>

                    </div>
                </Layout>
            </div >
        )

    }

}


export default NearYou