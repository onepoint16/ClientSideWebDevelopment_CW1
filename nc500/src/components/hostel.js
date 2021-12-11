import React, { Component } from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap'

class DataTable extends Component {

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

export default class Hostel extends Component {

    constructor(props) {
        super(props);
        this.state = { hostelData: [] };
    }

    getId() {
        const url = window.location.href;
        const Id = url.substring(url.lastIndexOf('/') + 1);
        return Id;
    }

    componentDidMount() {
        axios.get('http://localhost:3001/hostels/' + this.getId())
            .then(res => {
                this.setState({ hostelData: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.hostelData.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return ( 
            <div>
                {this.dataTable()}
            </div>
        )
    }
}
