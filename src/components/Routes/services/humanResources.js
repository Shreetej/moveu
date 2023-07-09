import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Dietician from '../../../images/HR/dietician.jpeg'
import HumanResource from '../../../images/HR/HumanResource.jpg'
import PhysicalTherapist from '../../../images/HR/physicaltherapist.jpeg'
import PersonalTrainer from '../../../images/HR/PersonalTrainer.jpg'

const HumanResources = () => {
  return (
    <div>
      <Container fluid style={{ color: 'white', fontSize:'1.2rem' }}>
        <Row className="bg-opacity-25" style={{ 'height': '85vh', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${HumanResource})`, backgroundSize: 'cover' }}>
          <Col className='m-4' xs={11} style={{ 'alignContent': 'center', color: 'white' }}>
            <h2 style={{ 'textAlign': 'center' }}>HUMAN RESOURCES</h2>
            <p style={{ 'textAlign': 'center'}}>MOVEYOU has access to the best personal trainers, coaches, and health and fitness professionals in the business. The opportunity to bring trainers and certified professionals on site to lead instruction is what sets the MOVEYOU experience apart while delivering tremendous value to participants.</p>
          </Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'flex-start', backgroundColor: 'lavender', backgroundImage: `url(${PersonalTrainer})`, backgroundSize: 'cover',color:'black'}}>
        <Col lg={7}></Col>
          <Col className='' xs={12} lg={5} >
            <div className='p-4' style={{ 'alignContent': 'center', justifyContent: 'center', 'opacity':0.9 }}>
              <h2 style={{ 'textAlign': 'center' }}>PERSONAL TRAINERS</h2>
              <p style={{ 'textAlign': 'justify' }}>Our elite team of personal trainers bring years of technical fitness experience and electric energy on-site partner locations to engage with the population.</p>
              <p className='mt-4'>On-site trainers can provide:</p>
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
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'start', backgroundColor: 'honeydew', backgroundImage: `url(${Dietician})`, backgroundSize: 'cover', opacity: '85%' }}>
          <Col lg={4} xs= {11} className='mx-4 p-4' style={{ color: 'black' }}>
            <h2 className='mt-4'>DIETITIANS</h2>
            <p>Our food should be our medicine & our medicine should be our food. Our deititians help you select food nutritions to achieve your goals.</p>
            <p className='mt-4'>Onsite dietitians can provide:</p>
            <div className='m-2'>
              <ul>
                <li>Interactive and educational cooking demos​</li>
                <li>Informational nutrition seminars</li>
                <li>Engagement with nutrition focused events and classes</li>
                <li>Individualized nutrition counseling</li>
              </ul>
            </div>
          </Col>
          <Col lg={7}></Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${PhysicalTherapist})`, backgroundSize: 'cover' }}>
          <Col lg={7}></Col>
          <Col className='' lg={5} xs={12} style={{ 'alignContent': 'center', color: 'black' }}>
            <h2 className='p-3' style={{ 'textAlign': 'center' }}>PHYSICAL THERAPISTS</h2>
            <p className='p-3' style={{ 'textAlign': 'justify'}}>We strive make physical therapy "cool" and break its "medical stereotype." Our physical therapists help populations prevent pain and injury by promoting regular check-ups with a therapist, just like you would a primary care physician. </p>
            <p className='mt-4'>Onsite physical therapists can provide:</p>
            <div className='m-2'>
              <ul>
                <li>Ergonomic assessment of office workstation</li>
                <li>Seminars and education on various topics including back pain prevention</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container></div>
  )
}

export default HumanResources