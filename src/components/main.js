import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { getCurrentUser, logout } from './services/user-service';

const UserButton = () =>{
  return (
            <NavDropdown title={getCurrentUser('name')} className='mx-2' menuVariant='dark' id="servicesScrollingDropdown">
                <NavDropdown.Item as={Link} to="/user/dashboard">USER DASHBOARD</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="" onClick={logout}>LOGOUT</NavDropdown.Item>
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

const NavScroll=()=> {

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
                <NavDropdown.Item as={Link} to="/humanengagement">Human Engagement</NavDropdown.Item>
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
            {getCurrentUser ? <UserButton/>:<LoginButton/>}
          </Nav>
        </Navbar.Collapse>
        </Container>

        
    </Navbar>
  );
}

export default NavScroll;
