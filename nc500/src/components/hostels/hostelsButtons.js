import React, { Component, useState, setState } from 'react';
import {Button} from 'react-bootstrap'
import Hostel from '../hostel/hostel'

class HostelsButtons extends Component {

    constructor(props) {
        super(props);
        this.state = { showHostel : this.props.showHostel };
    }

    openClick() {
        this.setState({ showHostel : true });
    }

    render() {

        const showSelectedHostel = this.state.showHostel;

        return (
            <div>
                {showSelectedHostel && <Hostel showHostel={this.props.showHostel} hostelId={this.props.obj.id} /> }
                {!showSelectedHostel &&
                <Button key={this.props.obj.id} onClick={() => this.openClick()}>
                    {this.props.obj.id}. {this.props.obj.name}
                </Button>}
                
            </div> 
        );
    }
}

export default HostelsButtons;