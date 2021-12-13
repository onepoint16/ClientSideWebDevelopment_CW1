import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

class HostelCard extends Component{

    constructor(props) {
        super(props);
            const hostel = this.props.hostel;

        this.state = {
            obj: this.props.obj
        };
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.hostel.name}</Card.Title>
                    <Card.Subtitle>Stop: {this.props.hostel.id}</Card.Subtitle>
                    <Card.Text>
                        {this.props.hostel.description}
                    </Card.Text>
                    <Button variant="primary">Write a Review</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HostelCard;