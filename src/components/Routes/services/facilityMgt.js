import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import MissionImage from '../../../images/about/pexelsackerman.jpg'
import Equipment from '../../../images/FDM/equipment20.jpeg'
import Gym from '../../../images/FDM/gym.jpeg'
import Design1 from '../../../images/FDM/design1.jpg'

const FacilityMgt = () => {
  return (
    <div>
      <Container fluid style={{ color: 'white' }}>
        <Row style={{ 'height': '85vh', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${Gym})`, backgroundSize: 'cover',fontSize: '3.5vh' }}>
          <Col className='m-4' xs={11} style={{ 'textAlign': 'center', 'alignContent': 'bottom', color: '#FDFDFD',fontWeight:'bold' }}>
            <h1 style={{ 'textAlign': 'center'}}><span className='shadow p-2' style={{ 'backgroundColor': ''}}>FACILITY DESIGN & MANAGEMENT</span></h1>
            <p className='mt-5' style={{ 'textAlign': 'center', fontSize: '20px' }}></p>
          </Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'center', backgroundColor: 'lavender', backgroundImage: `url(${Design1})`, backgroundSize: 'cover',fontSize: '3.5vh' }}>
          <Col lg={6}></Col>
          <Col className='m-4' xs={11} lg={5} >
            <div style={{ 'alignContent': 'center', justifyContent: 'center' }}>
              <h2 style={{ 'textAlign': 'center' }}>DESIGN & LAYOUT</h2>
              <p style={{ 'textAlign': 'justify'}}>With our years of fitness experience, our Facility Design team is able to help you design and layout the most effective gym for your population. Move You acts as your gym consultant, analyzing layouts of the smallest spaces of 500 square feet, to monster locations of  52,000+ square feet. </p>
              <p className='mt-4'>Design & Layout services include:</p>
              <div className='m-2'>
                <ul>
                  <li>Blueprint review for ideal spacing and square footage</li>
                  <li>Consultation with partner developer to design best space</li>
                  <li>Equipment planning and layout optimization to give the most use to guests, while maximizing the space allotted</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'center', backgroundColor: 'honeydew', backgroundImage: `url(${Equipment})`, backgroundSize: 'cover', opacity: '85%',fontSize: '3.5vh' }}>
          <Col className='m-4' xs={11} lg={5}>
            <h2 style={{ 'textAlign': 'center' }}>EQUIPMENT PROCUREMENT</h2>
            <p style={{ 'textAlign': 'justify' }}>Move You has been working with fitness equipment distributors for years, and know the best brands, machines, and styles in the industry. We can help you plan an equipment list, and ensure purchase, delivery, and install within your space.</p>
            <p className='mt-4'>Move You equipment procurement includes:</p>
              <div className='m-2'>
                <ul>
                  <li>Affordable rates from brand name equipment manufacturers</li>
                  <li>Equipment planning optimization: "getting the best bang for your buck"</li>
                </ul>
              </div>
          </Col>
          <Col lg='6'></Col>
        </Row>
        <Row style={{ 'height': 'fit-content', 'alignItems': 'center', backgroundColor: 'azure', backgroundImage: `url(${MissionImage})`, backgroundSize: 'cover', fontSize: '3.5vh' }}>
          <Col lg='6'></Col>
          <Col className='m-4' xs={11} lg={5} style={{ 'alignContent': 'center', color: 'white' }}>
            <h2 style={{ 'textAlign': 'center' }}>ON-SITE FITNESS</h2>
            <p style={{ 'textAlign': 'justify' }}>Maybe you already have a fitness facility, and just want amazing people to activate the space. Insert Move You on-site fitness. We can deploy our people to your space and make it come alive. </p>
            <p className='mt-4'>On-site Fitness services include:</p>
              <div className='m-2'>
                <ul>
                  <li>Staffing and recruiting of fitness staff</li>
                  <li>Hourly, part-time, and full-time placement of personal trainers, group fitness instructors, and engagement specialists </li>
                </ul>
              </div>
          </Col>
        </Row>
      </Container></div> 
  )
}

export default FacilityMgt