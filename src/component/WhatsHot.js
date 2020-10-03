import React from 'react';
import Layout from './Layout';
// import thing from 'https://apod.nasa.gov/apod/image/2010/SDO_2020Oct2_1024_0171.jpg';


class WhatsHot extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Layout>
                    <img src='https://apod.nasa.gov/apod/image/2010/SDO_2020Oct2_1024_0171.jpg' alt="hotimage"></img>
                </Layout>

            </div>
        )

    }

}

export default WhatsHot