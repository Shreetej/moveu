import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import vc from '../../../images/digiprog/vcoaching.jpg'
import dg from '../../../images/digiprog/dgHeader.jpg'

const DigProg = () => {
  return (
    <div>
      <Container fluid style={{ color: 'black' }}>
        <Row style={{ 'height': '60vh', 'alignItems': 'end', backgroundImage:`url(${dg})`,backgroundSize:'cover',opacity:'60%' }}>
          <Col className='m-4' style={{ 'alignContent': 'center' }}>
            <h1 className='mb-4' style={{ 'textAlign': 'center' }}>DIGITAL PROGRAMMING</h1>
          </Col>
        </Row>
        <Row style={{ 'height': '80vh', 'alignItems': 'center', backgroundColor: 'lavender', backgroundImage:`url(${vc})`,backgroundSize:'cover'}}>
          <Col xs={5} >
            <div  className='m-4' style={{ 'alignContent': 'center', justifyContent: 'center',color:'black' }}>
              <h2 style={{ 'textAlign': 'center' }}>VIRTUAL COACHING</h2>
              <p style={{ 'textAlign': 'justify', fontSize: '20px' }}>Our virtual coaches utilize the training philosophy developed over years of training elite athletes at the Under Armour Performance Centers powered by FX Fitness. Each custom training program is built on the pillars Move Better, Move Faster, Move Longer, and Move Stronger. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DigProg