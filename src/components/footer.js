import {React,Link} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Footer=()=> {
  return (
    <div className='bg-secondary bg-gradient' >
      <Row className='container mx-auto p-3'>
      <Col className='p-3'>
        <h2 className='text-center'>SERVICES</h2>
        <ul className='p-3'>
          <li><NavLink to='/humanEngagment' style={{textDecoration:'none',color:'white'}}>HUMAN ENGAGEMENT</NavLink></li>
          <li><NavLink to='/facilityMgt' style={{textDecoration:'none',color:'white'}}>FACILITY DESIGN & MANAGEMENT</NavLink></li>
          <li><NavLink to='/digProg' style={{textDecoration:'none',color:'white'}}>DIGITAL PROGRAMMING</NavLink></li>
        </ul>
      </Col>
      <Col className='p-3'>
        <h2 className='text-center'>ABOUT</h2>

      </Col>
      <Col className='p-3'>
        <h2 className='text-center'>SUPPORT</h2>
        <ul className='p-3'>
          <li><NavLink to='/contact' style={{textDecoration:'none',color:'white'}}>Contact Us</NavLink></li>
        </ul>

      </Col>
      <Col className='p-3'>
        <h2 className='text-center'></h2>
    
      </Col>
      </Row>
    </div>
  )
}

export default Footer