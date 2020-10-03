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
        // var header = new Headers();
        // header.append("api_key", '6NtHJvHpr8mralq5YlKnn9664eVXHxw1wfZrgyBA')
        var request = {
            method: 'GET',
            // headers: header
        }
        console.log(request)

        fetch(`https://localhost:4000/pic`, request)
            .then(res => res.json())
            .then(data => this.setState({ pic: data }))

    }

    render() {
        console.log(this.state.pic)
        return (
            <div>
                <Layout>
                    <img src={this.state.pic.hdurl} alt="hotimage"></img>
                </Layout>
            </div>
        )

    }

}

export default WhatsHot