import React, { Component } from 'react';

class DisplayTrip extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <h3>You Trip</h3>
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