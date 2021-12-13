import React, { Component } from 'react';

export default class Itinerary extends Component {

    constructor(props) {
        super(props);
        this.state = { startTrip : false, trip: [] };
    }

    render() {
        return (
            <div>
                <h2>Plan your trip </h2>
            </div>
        )
    }
}