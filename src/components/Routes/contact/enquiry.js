import React from 'react'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { IoMailOutline, IoMailOpenOutline } from 'react-icons/io5'
import { editEnquiry } from '../../services/user-service';

const Enquiry = (props) => {

    function getAge(date) {
        let diffTime = new Date().getTime() - new Date(date).getTime();
        // let diffDays = Math.round(diffTime/(1000*3600*24))
        let seconds = Math.floor(diffTime / 1000),
            minutes = Math.floor(seconds / 60),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24),
            months = Math.floor(days / 30),
            years = Math.floor(days / 365);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %= 30;
        months %= 12;

        if (years > 1) {
            return date
        } else if (months > 1) {
            return months + " months ago"
        } else if (days > 1) {
            return days + " days ago"
        } else if (hours > 1) {
            return hours + " hours ago"
        } else if (minutes > 1) {
            return minutes + " minutes ago"
        } else if (seconds > 1) {
            return seconds + " seconds ago"
        }
    }

    const handleRead=async(enq)=>{
        let updatedenq = enq
        updatedenq.read = true
        console.log(updatedenq)
        let updatedEnquiredStatus = await editEnquiry(updatedenq)
        console.log(updatedEnquiredStatus)
    }

    const handleUnread=async(enq)=>{
        let updatedenq = enq
        updatedenq.read = false
        console.log(updatedenq)
        let updatedEnquiredStatus = await editEnquiry(updatedenq)
        console.log(updatedEnquiredStatus)
    }

    return (
        <Card key={props.enq.id} className='m-3 shadow-lg border-dark' md={3} >
            <Card.Body>
                <Card.Header  className='d-flex' style={{ backgroundColor: '#302c2c', color: 'white', justifyContent: 'space-between' }}>{props.enq.name}
                <div>
                    {!props.enq.read &&<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Mark as Read</Tooltip>}><IoMailOutline onClick={()=>handleRead(props.enq)}></IoMailOutline></OverlayTrigger>}
                    {props.enq.read &&<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Mark as Unread</Tooltip>}><IoMailOpenOutline  onClick={()=>handleUnread(props.enq)}></IoMailOpenOutline></OverlayTrigger>}
                </div>
                </Card.Header>
                <Card.Title className='mt-2'>{props.enq.company}</Card.Title>
                <Card.Text>{props.enq.message}</Card.Text>
                <Card.Footer className="d-flex text-muted" style={{ justifyContent: 'space-between' }}><div>{props.enq.phone}</div>
                    <div>{props.enq.email}</div><div>{getAge(props.enq.enquiryDate)}</div></Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Enquiry