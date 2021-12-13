import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

class HostelCard extends Component{

    constructor(props) {
        super(props);
        console.log(this.props.obj);
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.obj.name}</Card.Title>
                    <Card.Subtitle>Stop: {this.props.obj.id}</Card.Subtitle>
                    <Card.Text>
                        {this.props.obj.description}
                    </Card.Text>
                    <Button variant="primary">Write a Review</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HostelCard;