import React, { Component, useState, setState } from 'react';
import {Button} from 'react-bootstrap'
import Hostel from '../hostel/hostel'

class HostelsTable extends Component {

    constructor(props) {
        super(props);
        this.state = { showHostel : false };
    }

    handleClick() {
        this.setState({ showHostel : true });
    }

    render() {

        const showSelectedHostel = this.state.showHostel;

        return (
            <div>
                {showSelectedHostel && <Hostel hostelId={this.props.obj.id} /> }
                {!showSelectedHostel &&
                <Button key={this.props.obj.id} onClick={() => this.handleClick()}>
                    {this.props.obj.id}. {this.props.obj.name}
                </Button>}
            </div> 
        );
    }
}

export default HostelsTable;