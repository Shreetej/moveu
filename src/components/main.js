import {React, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { logout, isLoggedIn } from './services/user-service';
import { useState, useEffect } from 'react';
import userContext from '../context/posts/UserContext';

const UserButton = (props) =>{
  // const [userName, setuserName] = useState("")
  const context = useContext(userContext);
  const {user, setuser} = context;

  // useEffect(() => {
  //   let user = isLoggedIn()
  //   console.log(user)
  //   setuserName(user)
  // let user = props
  function logoutUser(){
    props.setuser(null)
    // props.setlogin(false)
    logout()
  }
  // }, [])
  return (            
            <NavDropdown title={user.toUpperCase()} className='mx-2' menuVariant='dark' id="servicesScrollingDropdown">
                <NavDropdown.Item as={Link} to="/user/dashboard">USER DASHBOARD</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="" onClick={logoutUser}>LOGOUT</NavDropdown.Item>
            </NavDropdown>
  )
}

const LoginButton =()=>{
  return(
    <Nav.Item>
        <Nav.Link as={Link} className='' to='/login'>LOGIN</Nav.Link>
    </Nav.Item>
    )
}

const NavScroll=(props)=> {

  const context = useContext(userContext);
  const {user,setuser} = context;
  const {login,setlogin} = props

  return (
    <Navbar collapseOnSelect sticky='top' bg='dark' expand="lg" variant='dark' style={{zIndex:10,width:'100%'}}>
      <Container>
        <Navbar.Brand as={Link} className="fs-4" to="/">MOVE YOU</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="ml-auto"
            style={{width:'65%',alignContent:'flex-end'}}
            navbarScroll
            activeKey="1"
          >
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2' to='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2' to='/about'>ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="SERVICES" className='mx-2' menuVariant='dark' id="servicesScrollingDropdown">
                <NavDropdown.Item as={Link} to="/humanResources">Human Resources</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/facilityMgt">Facility Design & Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/digProg">Digital Programming</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2' to='/blog'>BLOG</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className='mx-2' to='/contact'>CONTACT</Nav.Link>
            </Nav.Item>
            {user&&<UserButton isLoggedIn={setuser}/>}
            {!user&&<LoginButton/>}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavScroll;
