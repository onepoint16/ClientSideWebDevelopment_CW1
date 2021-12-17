import React, { Component } from 'react';

class DisplayTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        console.log(JSON.stringify(this.props))
        return(
            <div>
                <h3>Your Trip</h3>
                <li>
                    <ul>
                        {this.props.destination}
                    </ul>
                    <ul>
                        {this.props.nights}
                    </ul>
                </li>
            </div>
        )
    }

}

export default DisplayTrip;