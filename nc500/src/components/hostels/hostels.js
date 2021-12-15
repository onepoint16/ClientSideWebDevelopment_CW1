import React, { Component } from 'react';
import axios from 'axios';
import HostelsTable from './hostelsTable';


export default class Hostels extends Component {

    constructor(props) {
        super(props);
        this.state = { hostelsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/hostels')
            .then(res => {
                this.setState({ hostelsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    hostelsTable() {
        return this.state.hostelsCollection.map((data, i) => {
            return <HostelsTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <h2>View the Hostels</h2>
                <h3>at each stage</h3>
                <div className='nc500_image'>
                    <img width="350px" height="350px" src="./nc500-map.png"
                    alt="map of nc500 here"/>
                </div>
                <div className="container-fluid">
                    <div className="justify-content-center card-group gap-3">
                    {this.hostelsTable()}
                    </div>
                </div>
            </div>
        )
    }
}