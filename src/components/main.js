import { Button, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom';


const NavScroll=()=> {
  return (
    <Navbar className="" bg="dark" expand="lg" variant='dark' style={{position:'fixed',zIndex:2,width:'100%'}}>
      <Container>
        <Navbar.Brand className="fs-2" href="/home">MOVE YOU</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            // className="mx-2"
            style={{width:'60%'}}
            navbarScroll
          >
            <NavLink role='button' className='mx-auto p-2' to='/'><Button className='btn bg-transparent border-0'>HOME</Button></NavLink>
            <NavDropdown className='mx-auto p-2' title="SERVICES" id="servicesScrollingDropdown">
              <NavDropdown.Item href="/humanengagement">HUMAN ENGAGEMENT</NavDropdown.Item>
              <NavDropdown.Item href="/facilityMgt">FACILITY DESIGN & MANAGEMENT</NavDropdown.Item>
              <NavDropdown.Item href="/digProg">DIGITAL PROGRAMMING</NavDropdown.Item>
            </NavDropdown>
            <NavLink className='mx-auto p-2' to='/about'><Button className='btn bg-transparent border-0'>ABOUT</Button></NavLink>
            <NavLink className='mx-auto p-2' to='/contact'><Button className='btn bg-transparent border-0'>CONTACT</Button></NavLink>
            <NavLink className='mx-auto p-2' to='/blog'><Button className='btn bg-transparent border-0'>BLOG</Button></NavLink>
            <NavLink className='mx-auto p-2' to='/login'><Button className='btn bg-transparent border-0'>LOGIN</Button></NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavScroll;
