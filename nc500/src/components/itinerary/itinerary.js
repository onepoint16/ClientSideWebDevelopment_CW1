import React, { Component } from 'react';
import TableDatePicker from './tableDatePicker'; 
import StageSelector from './stageSelector';
import DisplayTrip from './displayTrip';


export default class Itinerary extends Component {

    constructor(props) {
        super(props);
        this.state = { startTrip : false, trip: []};
    }

    render() {
        return (
            <div>
                <h2>Plan your trip </h2>
                <div className='nc500_image'>
                    <img width="350px" height="350px" src="./nc500-map.png"
                    alt="map of nc500 here"/>
                </div>
                <TableDatePicker />
                <StageSelector />
                <DisplayTrip />
            </div>
        )
    }
}
