import {React} from 'react'
import {Button, Form} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import {BsFacebook,BsWhatsapp,BsInstagram,BsTwitter} from 'react-icons/bs'

const Footer=()=> {
  return (
    <>
    <Container fluid='true' className='bg-dark' /*style={{backgroundColor:'#222a47'}}*/>
      <footer className='pt-5'>
      <Row className='container mx-auto'>
      <Col xs={6} md={2} className='mb-2'>
        <h4 className='p-3 text-light'>SERVICES</h4>
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
        <h4 className='p-3 text-light'>ABOUT</h4>
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
        <h4 className='p-3 text-light'>SUPPORT</h4>
          <Nav className="flex-column text-light">
          <Nav.Item>
            <Nav.Link className='text-light' as={Link} to="/contact">CONTACT US</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  className='text-light' as={Link} to="/facilityMgt">FACILITY DESIGN & MANAGEMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link  className='text-light' as={Link} to="/digProg">DIGITAL PROGRAMMING</Nav.Link>
          </Nav.Item>
        </Nav>

      </Col>
      <Col xs={6} md={5} className='mb-2 offset-1'>
        <Form className='text-light'>
          <h4 className='text-center py-3'>Subscribe to our newsletter</h4>
          <p>Monthly digest of what's new and exciting from us</p>
          <div className='d-flex flex-row w-100 gap-2'>
            <label for="newsletter" className='visually-hidden'>Email Address</label>
            <input id='newsletter' type='text' className='form-control' placeholder='Email address'></input>
            <Button primary={true}>Subscribe</Button>
          </div>
        </Form>
        
      </Col>
      </Row>
      <div className='container d-flex flex-column flex-sm-row justify-content-between py-4 border-top text-light'>
      <p>@2022 Move You, Inc. All rights reserved.</p>
      <ul className='list-unstyled d-flex'>
        <li class='ms-3'>
          <Nav.Link href='https://www.twitter.com'>
            <BsTwitter/>
          </Nav.Link>
        </li>
        <li class='ms-3'>
          <Nav.Link href='https://www.instagram.com'>
            <BsInstagram/>
          </Nav.Link>
        </li>
        <li class='ms-3'>
          <Nav.Link href='https://www.facebook.com'>
            <BsFacebook/>
          </Nav.Link>
        </li>
        <li class='ms-3'>
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