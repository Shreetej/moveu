import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MissionImage from '../../../images/about/pexelsackerman.jpg'
import ResultsImage from '../../../images/about/pexelselina.jpg'
import JoinUsImage from '../../../images/about/pexelsmarcus.jpg'

const HumanResources = () => {
  return (
    <div>
      <Container fluid style={{ color: 'white' }}>
        <Row style={{ 'height': '80vh', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${MissionImage})`, backgroundSize: 'cover' }}>
          <Col className='m-4' xs={11} style={{ 'alignContent': 'center', color: 'white' }}>
            <h2 style={{ 'textAlign': 'center' }}>HUMAN RESOURCES</h2>
            <p style={{ 'textAlign': 'center', fontSize: '20px' }}>MOVEYOU has access to the best personal trainers, coaches, and health and fitness professionals in the business. The opportunity to bring trainers and certified professionals on site to lead instruction is what sets the MOVEYOU experience apart while delivering tremendous value to participants.</p>
          </Col>
        </Row>
        <Row style={{ 'height': '80vh', 'alignItems': 'center', backgroundColor: 'lavender', backgroundImage: `url(${ResultsImage})`, backgroundSize: 'cover' }}>
          <Col className='m-4' xs={7} >
            <div style={{ 'alignContent': 'center', justifyContent: 'center' }}>
              <h2 style={{ 'textAlign': 'center' }}>PERSONAL TRAINERS</h2>
              <p style={{ 'textAlign': 'justify', fontSize: '20px' }}>Our elite team of personal trainers bring years of technical fitness experience and electric energy on-site partner locations to engage with the population.</p>
              <p className='mt-4'>On-site FX Well trainers can provide:</p>
              <div className='m-2'>
                <ul>
                  <li>Scheduled group fitness classes</li>
                  <li>Private group workouts</li>
                  <li>One-on-one personal training</li>
                  <li>Engagement with wellness focused events and classes</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={4}></Col>
        </Row>
        <Row style={{ 'height': '80vh', 'alignItems': 'start', backgroundColor: 'honeydew', backgroundImage: `url(${JoinUsImage})`, backgroundSize: 'cover', opacity: '85%' }}>
          <Col xs={7}></Col>
          <Col xs={4}>
            <h2 className='mt-4'>DIETITIANS</h2>
            <p style={{ fontSize: '20px' }}>Our food should be our medicine & our medicine should be our food. Our deititians help you select food nutritions to achieve your goals.</p>
            <p className='mt-4'>Onsite FX Well dietitians can provide:</p>
            <div className='m-2'>
              <ul>
                <li>Interactive and educational cooking demos​</li>
                <li>Informational nutrition seminars</li>
                <li>Engagement with nutrition focused events and classes</li>
                <li>Individualized nutrition counseling</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ 'height': '80vh', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${MissionImage})`, backgroundSize: 'cover' }}>
          <Col className='m-4' xs={5} style={{ 'alignContent': 'center', color: 'white' }}>
            <h2 style={{ 'textAlign': 'center' }}>PHYSICAL THERAPISTS</h2>
            <p style={{ 'textAlign': 'justify', fontSize: '20px' }}>We strive make physical therapy "cool" and break its "medical stereotype." Our physical therapists help populations prevent pain and injury by promoting regular check-ups with a therapist, just like you would a primary care physician. </p>
            <p className='mt-4'>Onsite FX Well physical therapists can provide:</p>
            <div className='m-2'>
              <ul>
                <li>Ergonomic assessment of office workstation</li>
                <li>Seminars and education on various topics including back pain prevention</li>
              </ul>
            </div>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Container></div>
  )
}

export default HumanResources