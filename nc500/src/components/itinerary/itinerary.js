import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";


export default class Itinerary extends Component {

    constructor(props) {
        super(props);
        this.state = { startTrip : false, trip: [], startDate : new Date(), setStartDate : new Date() };
    }

    selectStartDate() {
        // const [startDate, setStartDate] = this.setState(new Date());
        return (
            <DatePicker selected={this.startDate} onChange={(date) => this.setStartDate(date)} />
        );
    }

    render() {
        return (
            <div>
                <h2>Plan your trip </h2>
                {!this.startTrip && this.selectStartDate()}
            </div>
        )
    }
}