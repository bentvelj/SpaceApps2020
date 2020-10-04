import React from 'react';
import Layout from './Layout';


class WhatsHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:4000/pic`)
            .then(res => res.json())
            .then(data => this.setState({ pic: data }))

        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude);
            });
        }
    }

    render() {
        // console.log(this.state.pic)
        return (
            <div>
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <img src={this.state.pic.hdurl} alt="image of the day" style={{ width: "37vw" }}></img>

                            </div>
                            <div className=" offset-2 col-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Pic of the Day!</h3>
                                        <h5>{this.state.pic.date}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>{this.state.pic.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Layout>
            </div >
        )

    }

}

export default WhatsHot