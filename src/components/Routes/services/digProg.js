import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import vc from '../../../images/digiprog/vcoaching.jpg'
import dg from '../../../images/digiprog/dgHeader.jpg'

const DigProg = () => {
  return (
    <div>
      <Container fluid style={{ color: 'black' }}>
        <Row style={{ 'height': '60vh', 'alignItems': 'end', backgroundImage:`url(${dg})`,backgroundSize:'cover',opacity:'60%',backgroundAttachment:'fixed', fontSize:'3.5vh' }}>
          <Col className='m-4' style={{ 'alignContent': 'center' }}>
            <h1 className='mb-4' style={{ 'textAlign': 'center' }}>DIGITAL PROGRAMMING</h1>
          </Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'center', 'min-height':'80vh',backgroundColor: 'lavender', backgroundImage:`url(${vc})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
          <Col lg={5} xs={11}>
            <Container  className='m-4 text-cyan' style={{ 'alignContent': 'center', justifyContent: 'center',color:'black' }}>
              <h2 style={{ 'textAlign': 'center' }}>VIRTUAL COACHING</h2>
              <p style={{ 'textAlign': 'justify' }}>Our virtual coaches utilize the training philosophy developed over years of training elite athletes at the Under Armour Performance Centers powered by FX Fitness. Each custom training program is built on the pillars Move Better, Move Faster, Move Longer, and Move Stronger. </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DigProg