import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Itinerary from "./itinerary";


// Function to send date through to itinerary
// function handleClick() {
//     return(
//         <Itinerary selectedStartDate={this.setStartDate(this.startDate)}/>
//     );
// };


export default function TableDatePicker() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            Start Date: <DatePicker
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={date => setStartDate(date)}
                selectsStart 
                startDate={startDate}
            />
            
            {/* Wanted to add button that would invert the showing of date DatePicker
            The on click would also have passed date through to itinerary so it could display it */}
            {/* <Button onClick={() => handleClick()}>
                Pick Date
            </Button> */}
        </div>
        
    );
}