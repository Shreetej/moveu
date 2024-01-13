import { React, useContext, useState } from 'react'
import { Form, Row, Col, FormGroup, FormLabel, Container } from 'react-bootstrap'
import { ChangePassword} from '../../services/user-service';
import userContext from '../../../context/users/UserContext';

const Password = () => {

  const {user} = useContext(userContext)
  const [data, setData] = useState({
    username: user.username,
    cpassword: '',
    npassword: '',
    rpassword: '',
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })
  }

  const submitForm = async (event) => {
    event.preventDefault()
    // console.log(data)
    let enquiry = await ChangePassword(data)
    document.getElementById('passForm').reset();
    console.log(enquiry)
  }

  return (
    <div>
      <Container>
        <h1>Password</h1>
        <Form id="passForm" onSubmit={submitForm} className='mb-5'>
          <Row className='p-2'>
            <Col md={7}>
              <FormGroup md={5}>
                <FormLabel>Current Password *</FormLabel>
                <Form.Control required type='password' placeholder='' name='cpassword' id='cpassword' onChange={(e) => handleChange(e, 'cpassword')}></Form.Control>
              </FormGroup>
            </Col>
            <Col md={7}>
              <FormGroup md={5}>
                <FormLabel>New Password *</FormLabel>
                <Form.Control required type='password' placeholder='' name='npassword' id='npassword' onChange={(e) => handleChange(e, 'npassword')}></Form.Control>
              </FormGroup>
            </Col>
          </Row>
          <Row className='p-2'>
            <Col md={7}>
              <FormGroup md={5}>
                <FormLabel>Confirm Password *</FormLabel>
                <Form.Control required type='password' placeholder='' name='rpassword' id='rpassword' onChange={(e) => handleChange(e, 'rpassword')}></Form.Control>
              </FormGroup>
            </Col>
          </Row>
          <Row >
            <Col md={4}>
              <FormGroup md={5}>
                <Form.Control type='submit' value={'Submit'} className='btn rounded-0 bg-dark text-light mt-4 py-2 px-4' style={{ backgroundColor: '#222a47' }}></Form.Control>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Password