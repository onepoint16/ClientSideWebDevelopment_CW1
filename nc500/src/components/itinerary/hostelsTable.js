import React, { Component } from 'react';
import {Button, Table} from 'react-bootstrap'
import 'react-number-selector/dist/index.css'
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
            <Table variant='light'>
                <tr>
                    <td>
                        Stage: {this.props.obj.id}
                    </td>
                    <td>
                        {this.props.obj.name}
                    </td>
                    <td>
                        <input className="form-control" id="nights" type="number" min="1" max="7" placeholder="How many nights " />
                    </td>
                    <td>
                        <Button variant="secondary"onClick={()=>{
                            let destination = this.props.obj.name;
                            let nights = document.getElementById('nights').value;
                            this.makeItinerary(destination, nights);
                            }}>Add to trip
                        </Button>
                    </td>
                </tr>
            </Table>
        );
    }
}

export default HostelsTable;