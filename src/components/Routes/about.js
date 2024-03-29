import React from 'react'
import {Container, Row,Col,Button} from 'react-bootstrap'
import MissionImage from '../../images/about/pexelsackerman.jpg'
import ResultsImage from '../../images/about/pexelselina.jpg'
import JoinUsImage from '../../images/about/pexelsmarcus.jpg'

const About=()=> {
  return (
    <div>
      <Container fluid style={{color:'white'}}>
      <Row style={{'height':'80vh','alignItems':'center',backgroundColor:'azure',backgroundImage:`url(${MissionImage})`,backgroundSize:'cover'}}>
        <Col className='m-4' xs={11} lg={5} style={{'alignContent':'center',color:'white'}}>
          <h2 style={{'textAlign':'center'}}>OUR MISSION</h2>
          <p style={{'textAlign':'justify',fontSize:'1.2em'}}>To enhance the quality of life in the communities, we serve through our fitness philosophy, facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness.</p>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row style={{'height':'80vh','alignItems':'center',backgroundColor:'lavender',backgroundImage:`url(${ResultsImage})`,backgroundSize:'cover'}}>
        <Col xs={8}></Col>
        <Col className='m-4' xs={11} lg={3} >
          <div style={{'alignContent':'center',justifyContent:'center'}}>
            <h2 style={{'textAlign':'center'}}>RESULTS</h2>
            <p style={{'textAlign':'justify',fontSize:'1.2em'}}>Check what people have to say about us & their progress in lives from what they were to what they are today</p>
            <Button>PROOF</Button>
          </div>
        </Col>
      </Row>
      <Row className="img-fluid" style={{height:'fit-content','alignItems':'start',minHeight:'80vh',backgroundColor:'honeydew',backgroundImage:`url(${JoinUsImage})`,backgroundSize:'cover',opacity:'85%'}}>
        <Col style={{'textAlign':'center'}}>
          <h2 className='mt-4'>JOIN US</h2>
          <p style={{fontSize:'1.2em'}}>To help improve fitness and overall health, thereby increasing stamina and concentration</p>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default About