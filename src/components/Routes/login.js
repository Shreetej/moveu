import React from 'react'
import { Button, Card, Col, Container, FormControl, FormText, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/user-service';
import { ToastContainer } from 'react-toastify';

const Login=()=> {

  const navigate = useNavigate();
  const [loginDetail, setloginDetail] = useState({
     name:'',
     password:''
  })
  const [error, seterror] = useState({
    errors:{},
    isError:false
  });

  const handleChange =(event,field)=>{
    let actualvalue = event.target.value
    setloginDetail({
      ...loginDetail,
      [field]:actualvalue
    })
  }

  const submitLogin = async (event)=>{
    event.preventDefault()
    console.log(loginDetail);
    let user = await login(loginDetail)
    console.log("In Login: user ="+user)
    if(user!=null){
      console.log(user)
      navigate("/user/dashboard",{state:user})
    }
  }
 
  return (
    <div style={{background: 'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))'}}>
      {/* <ToastContainer/> */}
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
                      <FormControl type="email" id="typeEmailX" placeholder='Email' value={loginDetail.name} onChange={(e)=>handleChange(e,'name')}/>
                      <FormText></FormText>
                    </div>
                    
                    <div className="form-outline form-white mb-4">
                      <FormControl type="password" id="typePasswordX" placeholder='Password' value={loginDetail.password} onChange={(e)=>handleChange(e,'password')}/>
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                    <Button variant="outline" className="btn btn-outline-light btn-lg px-5" type="submit" onClick={submitLogin}>Login</Button>
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