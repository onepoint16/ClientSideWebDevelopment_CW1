import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Hostel from '../hostel/hostel'

class HostelsTable extends Component {

    constructor(props) {
        super(props);
        this.state = { showHostel : false };
    }

    handleClick() {
        this.state({ showHostel: true} );
    }

    render() {

        const ShowHostel = this.state.showHostel;

        if (ShowHostel) {
            return (
                <div>
                    <Hostel />
                </div>
            );
        }

        return (

            <Button onClick={this.handleClick}>
            {this.props.obj.id} {this.props.obj.name}
            </Button>
            
        );
    }
}

export default HostelsTable;