import React from 'react'
import { Button, Card, Col, Container, FormControl, FormText, Row } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../services/user-service';
import { ToastContainer } from 'react-toastify';
import userContext from '../../context/posts/UserContext';
import {Spinner} from 'react-bootstrap';

const Login = (props) => {

  const context = useContext(userContext);
  const { setuser } = context;
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const [loginDetail, setloginDetail] = useState({
    name: '',
    password: ''
  })
  const [error, seterror] = useState({
    errors: {},
    isError: false
  });

  const handleChange = (event, field) => {
    let actualvalue = event.target.value
    setloginDetail({
      ...loginDetail,
      [field]: actualvalue
    })
  }

  const submitLogin = async (event) => {
    event.preventDefault()
    setloading(true)
    //console.log(loginDetail);
    let user = null
    try{
      user = await LoginService(loginDetail)
    }catch(err){
      console.log(err)
    }finally{
      setloading(false);
    }
    // console.log("In Login: user =" + user.user.username)
    if (user != null) {
      //  console.log(user)
      setuser(user.user.username)
      //      props.setlogin(true)
      navigate("/user/dashboard")
    }
  }

  return (
    <div style={{ background: 'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))' }}>
      {/* <ToastContainer/> */}
      <section className='vh-80'>
        <Container className='py-3'>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col md={8} lg={6} xl={5}>
              <Card bg='dark' text='white' style={{ borderRadius: '1rem' }}>
                <Card.Body className='p-5 text-center'>
                  <div className='mb-md-5 mt-md-4 pb-5'>
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <FormControl type="email" id="typeEmailX" placeholder='Email' value={loginDetail.name} onChange={(e) => handleChange(e, 'name')} />
                      <FormText></FormText>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <FormControl type="password" id="typePasswordX" placeholder='Password' value={loginDetail.password} onChange={(e) => handleChange(e, 'password')} />
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    {!loading&&<Button variant="outline" className="btn btn-outline-light btn-lg px-5" type="submit" onClick={submitLogin}>Login</Button>}
                    {loading&&<Button variant="outline" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>}
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