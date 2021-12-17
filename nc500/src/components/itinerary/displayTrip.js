import React, { Component } from 'react';

class DisplayTrip extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Your Trip</h3>
                <p>Still in poroduction</p>
                <li>
                    <ul>
                        {this.props.plannedTrip}
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