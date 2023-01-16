import {React,useState} from 'react'
import { Container, Form, FormGroup, FormLabel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ImLocation } from 'react-icons/im'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { sendMessage } from '../../services/user-service'

const ShowContact = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    company:'',
    phone:'',
    message:'',
    enquiryDate:Date.now()
  });

  const submitForm=async(event)=>{
    event.preventDefault()
    // console.log(data)
    let enquiry = await sendMessage(data)
    console.log(enquiry)
  }

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }

  return (
    <div>
      <Container className='shadow-lg rounded-3 mt-5 mb-5'>
        <Row>
          <Col md={8} className=''>
            <div className='bg-white form h-100 p-5'>
              <h3 className='text-center'>Send us a message</h3>
              <Form onSubmit={submitForm} className='mb-5'>
                <Row className='p-2'>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Name *</FormLabel>
                      <Form.Control required type='text' placeholder='Your name' name='name' id='name' onChange={(e) => handleChange(e, 'name')}></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Email *</FormLabel>
                      <Form.Control required type='email' placeholder='Your email' name='email' id='email' onChange={(e) => handleChange(e, 'email')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Phone *</FormLabel>
                      <Form.Control required type='input' placeholder='Your number' name='phone' id='phone' onChange={(e) => handleChange(e, 'phone')}></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Company</FormLabel>
                      <Form.Control type='text' placeholder='Company name' name='company' id='company' onChange={(e) => handleChange(e, 'company')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={12}>
                    <FormGroup md={5}>
                      <FormLabel>Message *</FormLabel>
                      <Form.Control required as='textarea' cols={30} rows={4} placeholder='Write your message' name='message' id='message' onChange={(e) => handleChange(e, 'message')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row >
                  <Col md={4}>
                    <FormGroup md={5}>
                      <Form.Control type='submit' value={'Send Message'} className='btn rounded-0 bg-dark text-light mt-4 py-2 px-4' style={{ backgroundColor: '#222a47' }}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col md={4} className='bg-dark text-light' style={{ backgroundColor: '#222a47' }}>
            <div className='contact-info h-100 p-5'>
              <h3>Contact Information</h3>
              <p>We are glad to hear from you.</p>
              <ul className='list-unstyled p-2'>
                <li className='d-flex p-2'>
                  <span className='mr-3'><ImLocation /></span>
                  <span className='text mx-2'>C-228, Basement, C-block, Greater Kailash I, New Delhi 110048</span>
                </li>
                <li className='d-flex p-2'>
                  <span className='mr-3'><FiPhoneCall /></span>
                  <span className='text mx-2'>+91 99118 72072</span>
                </li>
                <li className='d-flex p-2'>
                  <span className='mr-3'><FiMail /></span>
                  <span className='text mx-2'>info@moveu.in</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShowContact