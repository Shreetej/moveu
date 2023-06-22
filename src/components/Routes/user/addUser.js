import {React, useState} from 'react'
import { Container, Col, Row, Form, FormGroup, FormLabel } from 'react-bootstrap'
import { CreateUser } from '../../services/user-service';

const AddUser = () => {

    const [data, setData] = useState({
        username: '',
        email: '',
        role: '',
        password:''
    });

    const submitForm = async (event) => {
        event.preventDefault()
        console.log(data)
        let user = await CreateUser(data)
    }

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }

    return (
        <Container className='shadow-lg rounded-3 m-2'>
            <Row>
                <Col md={12} className=''>
                    <div className='bg-white form h-100 p-5'>
                        <h3 className='text-bold text-center'>ADD USER</h3>
                        <Form onSubmit={submitForm} className='mb-3'>
                            <Row className='p-2'>
                                <Col md={6}>
                                    <FormGroup md={6}>
                                        <FormLabel>Username *</FormLabel>
                                        <Form.Control required type='text' placeholder='Enter username' name='username' id='username' onChange={(e) => handleChange(e, 'username')}></Form.Control>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup md={6}>
                                        <FormLabel>Email *</FormLabel>
                                        <Form.Control required type='text' placeholder='Enter Email' name='email' id='email' onChange={(e) => handleChange(e, 'email')}></Form.Control>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <Col md={6}>
                                    <FormGroup md={6}>
                                        <FormLabel>Role *</FormLabel>
                                        <Form.Control required type='text' placeholder='Enter role' name='role' id='role' onChange={(e) => handleChange(e, 'role')}></Form.Control>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup md={6}>
                                        <FormLabel>Password *</FormLabel>
                                        <Form.Control required type='password' placeholder='Enter password' name='password' id='password' onChange={(e) => handleChange(e, 'password')}></Form.Control>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='justify-content-center' style={{ 'textAlign': 'center' }}>
                                <Col md={5}>
                                    <FormGroup md={3} style={{ 'float': 'none' }}>
                                        <Form.Control type='submit' value={'Submit'} className='btn rounded-3 bg-dark text-light mt-4 py-2 px-4' style={{ backgroundColor: '#222a47' }}></Form.Control>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AddUser