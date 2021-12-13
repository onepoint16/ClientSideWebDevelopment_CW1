import React, { Component } from 'react';
import axios from 'axios';
import HostelCard from './hostelCard';


export default class Hostel extends Component {

    constructor(props) {
        super(props);
        this.state = { hostelData: [], currentHostel: [] };
    }

    componentDidMount() {

        const selectedHostelId = this.props.hostelId

        axios.get('http://localhost:3001/hostels/' + selectedHostelId)
            .then(res => {
                this.setState({ hostelData: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    hostelCard() {
        return this.state.hostelData.map(function (currentHostel, i) {
            return <HostelCard hostel={currentHostel} key={i} />;
        });
    }

    render() {
        return ( 
            <div>
                {this.hostelCard()}
            </div>
        )
    }
}
