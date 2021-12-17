import React, { Component } from 'react';
import {Button, Table} from 'react-bootstrap'
import DisplayTrip from './displayTrip';

class HostelsTable extends Component {

    constructor(props) {
        super(props);
        this.state = { trip : []}
    }

    makeItinerary(destination, nights) {
        this.setState({ trip : [destination, nights]})
        return this.state.trip.map((data, i) => {
            return <DisplayTrip obj={data} key={i} />;
        });
    }

    render() {
        return (
                <tr>
                    <td>Stage: {this.props.obj.id}</td>
                    <td style={{width:"20rem"}} >{this.props.obj.name}</td>
                    <td><input style={{width:"15rem"}} className="form-control" id="nights" type="number" min="1" max="7" placeholder="How many nights " /></td>
                    <td>
                        <Button className="bg-primary" onClick={()=>{
                            let destination = this.props.obj.name;
                            let nights = document.getElementById('nights').value;
                            this.makeItinerary(destination, nights);
                            }}>Add to trip
                        </Button>
                    </td>
                </tr>
            
        );
    }
}

export default HostelsTable;