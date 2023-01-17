import {React, useState,useEffect,useContext} from 'react'
import { Card, Container} from 'react-bootstrap'
import { GetEnquiry } from '../../services/user-service'
import ShowContact from './showContact'
import userContext from '../../../context/posts/UserContext'

const Contact = () => {

  const [enquiries, setenquiries] = useState('')
  const usercontext = useContext(userContext);
  const { user } = usercontext;
  
  const getEnquiries=async()=>{
    let enquiry = await GetEnquiry();
    setenquiries(enquiry);
    // return enquiry;
  }

  useEffect(() => {
    getEnquiries()
  }, [])
  
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

  const getAllEnquiries = () => {
    if (enquiries.length > 0) {
      return enquiries.map(enquiry =>
        <Card key={enquiry.id} className='m-3 shadow-lg' md={3}>
          <Card.Body>
            <Card.Header style={{ backgroundColor: '#302c2c', color: 'white' }}>{enquiry.name}</Card.Header>
            {/* <Card.Img variant='top' src={post.imageLocation} /> */}
            <Card.Title className='mt-2'>{enquiry.company}</Card.Title>
            <Card.Text>{enquiry.message}</Card.Text>
            <Card.Footer className="d-flex text-muted" style={{ justifyContent: 'space-between' }}><div>{enquiry.phone}</div>
              <div>{enquiry.email}</div><div>{getAge(enquiry.enquiryDate)}</div></Card.Footer>
          </Card.Body>
        </Card>
      );
    } else {
      return <>No Enquiries to Display</>
    }
  }

  return (
    <div>
      {!user&&<ShowContact/>}
      {user&&<Container>{getAllEnquiries()}</Container>}
    </div>
  )
}

export default Contact
