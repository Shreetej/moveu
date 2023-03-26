import {React, useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import {BsFacebook,BsWhatsapp,BsInstagram,BsTwitter} from 'react-icons/bs'
import { addSubscription } from './services/user-service'
// import { Fa500Px } from 'react-icons/fa'

const Footer=()=> {

  const [subscriptionData,setSubscriptionData] = useState({
    email:'',
    active:false,
    subscriptionStartDate:'',
    subscriptionEndDate:''
  });

  const subscribe = async()=>{
    setSubscriptionData({...subscriptionData,subscriptionStartDate:Date.now(),active:true})
    console.log(subscriptionData)
    let subscription = await addSubscription(subscriptionData)
  }

  const handleChange=(event,property)=>{
     setSubscriptionData({...subscriptionData,[property]:event.target.value})
  }

  return (
    <>
    <Container fluid='true' className='bg-dark' /*style={{backgroundColor:'#222a47'}}*/>
      <footer className='pt-3'>
      <Row className='container mx-auto'>
      <Col xs={6} md={3} className='mb-2'>
        <h4 className='p-2 text-light'>SERVICES</h4>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link className='text-light' as={Link} to="/humanengagement">HUMAN ENGAGEMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  className='text-light' as={Link} to="/facilityMgt">FACILITY DESIGN & MANAGEMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link  className='text-light' as={Link} to="/digProg">DIGITAL PROGRAMMING</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs={6} md={2} className='mb-2'>
        <h4 className='p-2 text-light'>ABOUT</h4>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link className='text-light' as={Link} to="/blog">BLOG</Nav.Link>
          </Nav.Item>
        </Nav>

      </Col>
      <Col xs={5} md={2} className='mb-2'>
        <h4 className='p-2 text-light'>SUPPORT</h4>
          <Nav className="flex-column text-light">
          <Nav.Item>
            <Nav.Link className='text-light' as={Link} to="/contact">CONTACT US</Nav.Link>
          </Nav.Item>
        </Nav>

      </Col>
      <Col xs={6} md={4} className='mb-2 offset-1'>
        <Form className='text-light'>
          <h4 className='text-center py-3'>Subscribe to our newsletter</h4>
          <p>Monthly digest of what's new & exciting from us</p>
          <div className='d-flex flex-row w-100 gap-2'>
            <label htmlFor="newsletter" className='visually-hidden'>Email Address</label>
            <input id='email' type='email' className='form-control' placeholder='Email address' onChange={(e)=>handleChange(e,'email')}></input>
            <Button variant='primary' onClick={()=>subscribe()}>Subscribe</Button>
          </div>
        </Form>
      </Col>
      </Row>
      <div className='container d-flex flex-column flex-sm-row justify-content-between pt-4 pb-2 border-top text-light'>
      <p>@2022 Move You, Inc. All rights reserved.</p>
      <ul className='list-unstyled d-flex'>
        <li className='ms-3'>
          <Nav.Link href='https://www.twitter.com'>
            <BsTwitter/>
          </Nav.Link>
        </li>
        <li className='ms-3'>
          <Nav.Link href='https://www.instagram.com'>
            <BsInstagram/>
          </Nav.Link>
        </li>
        <li className='ms-3'>
          <Nav.Link href='https://www.facebook.com'>
            <BsFacebook/>
          </Nav.Link>
        </li>
        <li className='ms-3'>
          <Nav.Link href='https://wa.me/+919911872072'>
            <BsWhatsapp/>
          </Nav.Link>
        </li>
      </ul>
    </div>
      </footer>
    </Container>

    </>
  )
}

export default Footer