import React, { useState, useContext } from 'react'
import {  Row, Col, Container, Nav, Navbar} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom';
import userContext from '../../../context/posts/UserContext';

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const usercontext = useContext(userContext);
  const { user } = usercontext;

  return (
    <div className=''>
      <Container fluid >
      <Row className =''>
        <Col xs='3' className='bg-dark border border-light text-white' >
        <h4 className='text-center'>MENU</h4>
        <Navbar variant='dark'>
          <Nav
            className="flex-column"
            style={{width:'65%',alignContent:''}}
            navbarScroll
            activeKey="1"
          >
            {user.role==="admin"&&<Nav.Item>
              <Nav.Link as={Link} className='mx-2 text-light' to='users'>USERS</Nav.Link>
            </Nav.Item>}
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2 text-light' to='posts'>BLOG</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2 text-light' to='password'>Change Password</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar>
        </Col>
        <Col>
          <Outlet/>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default UserDashboard