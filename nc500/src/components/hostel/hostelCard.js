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
            <Card bg="primary" style={{ width: '18rem', height:"fit-content",boxShadow:"0.5rem 1rem 1rem rgba(0, 0, 0, 0.5)", }}>
                <Card.Img variant="top" src={"./" + this.props.hostel.name + ".jpg"} />
                <Card.Title className='text-center'>{this.props.hostel.name}</Card.Title>
                <Card.Subtitle className="text-muted text-center bg-light ">Stage:  {this.props.hostel.id}</Card.Subtitle>
                <Card.Body className="bg-light" ><Card.Text>
                        {this.props.hostel.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                    <Button variant="primary">Write a Review</Button></Card.Footer>
                
            </Card>
        );
    }
}

export default HostelCard;