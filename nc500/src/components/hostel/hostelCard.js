import React, { Component } from 'react';
import {Card, Button, CloseButton, Badge, Accordion} from 'react-bootstrap'
import ReactStars from "react-stars"
import axios from 'axios';
import HostelsButtons from '../hostels/hostelsButtons';


class HostelCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            obj: this.props.obj,
            showHostel : this.props.showHostel
        };
    }

    closeClick() {
        this.setState({ showHostel : false })
        return (
            <div>
                <HostelsButtons close={this.props.showHostel}/>
            </div>
            
        );
    }

    addReview(id, review, reviewer) {
        axios.post('http://localhost:3001/hostels/review/'+id+'', {
            reviewer: reviewer,
            review: review
        })
        .then(res => {
            console.log(res);
            window.location.href = '/hostels';
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    

    render() {
        return (
            <Card bg="primary" style={{ width: '60rem', height:"fit-content",boxShadow:"0.5rem 1rem 1rem rgba(0, 0, 0, 0.5)", }}>
                <CloseButton variant="white" onClick={() => this.closeClick()}/>
                <Card.Img variant="top" src={"./" + this.props.hostel.name + ".jpg"} />
                <Card.Title className='text-center'>{this.props.hostel.name}</Card.Title>
                <Card.Subtitle className="text-muted text-center bg-light ">Stage:  {this.props.hostel.id}</Card.Subtitle>
                <Badge style={{borderRadius:"1rem", display:"flex"}} className="bg-primary ms-2" >
                    <ReactStars count={5} value={parseInt(this.props.hostel.ratings.reduce((a, b) => a + b, 0) / this.props.hostel.ratings.length)} 
                    size={24} color2={'#ffd700'} edit={false}/>
                </Badge>
                <Card.Body className="bg-light" >
                    <Card.Text>
                        {this.props.hostel.description}
                    </Card.Text>
                    <Card.Subtitle className="text-sm text-muted text-center ">{this.props.hostel.email}</Card.Subtitle>
                    <br/>
                    <Card.Subtitle className="text-sm text-muted text-center bg-light ">{this.props.hostel.address}, {this.props.hostel.postcode}</Card.Subtitle>
                    <br/>
                    <Card.Subtitle className="text-sm text-muted text-center ">{this.props.hostel.phone}</Card.Subtitle>
                </Card.Body>
                <Card.Footer className="text-center">

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Read Reviews</Accordion.Header>
                        {this.props.hostel.reviews.map((review, index) => (
                        <Accordion.Body key={index} className="text-center d-flex flex-column align-items-center " style={{margin:"0.5rem"}}> {review.review}
                            <Badge style={{borderRadius:"1rem", display:"flex"}} className="bg-dark ms-2">{review.reviewer}
                            </Badge>
                        </Accordion.Body>
                    ))}
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Write a Review</Accordion.Header>
                        <Accordion.Body>
                            <label className="text-center" htmlFor="reviewer">Reviewer</label>
                            <input className="form-control" id="reviewer" placeholder="Enter your name here"></input>
                            <label className="text-center" htmlFor="review">Review</label>
                            <textarea className="form-control" id="review" rows="3" placeholder="Enter your review here"></textarea>
                            <br/>
                            <Button variant="secondary"onClick={()=>{
                                let review = document.getElementById('review').value;
                                let reviewer = document.getElementById('reviewer').value;
                                this.addReview(this.props.hostel.id, review, reviewer);
                            }}>Submit Review</Button>
                            <form className="d-flex align-left flex-column" style={{display:"flex", flexDirection:"column"}}>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Card.Footer>
            </Card>
        );
    }
}

export default HostelCard;