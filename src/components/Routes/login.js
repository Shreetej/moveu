import React from 'react'
import { Button, Card, Col, Container, FormControl, Row } from 'react-bootstrap';

const Login=()=> {
  return (
    <div style={{background: 'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))'}}>
      <section className='vh-80'>
        <Container className='py-3'>
          <Row  className='d-flex justify-content-center align-items-center'>
            <Col md={8} lg={6} xl={5}>
              <Card bg='dark' text='white' style={{borderRadius:'1rem'}}>
                <Card.Body className='p-5 text-center'>
                  <div className='mb-md-5 mt-md-4 pb-5'>
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <FormControl type="email" id="typeEmailX" placeholder='Email'/>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <FormControl type="password" id="typePasswordX" placeholder='Password' />
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    <Button variant="outline" className="btn btn-outline-light btn-lg px-5" type="submit">Login</Button>
                  </div>

                </Card.Body>

              </Card>
            </Col>
          </Row>

        </Container>

      </section>
    </div>
  )
}

export default Login;