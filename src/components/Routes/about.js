import React from 'react'
import {Row,Col, Image} from 'react-bootstrap'
import DemoImage from '../../images/wellness/enjoylife.jpg'
import DemoImage2 from '../../images/wellness/happywoman.jpg'
const About=()=> {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <Image src={DemoImage2}></Image>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Image src={DemoImage}></Image>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div>
            
          </div>
        </Col>
        <Col xs={8}>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div>
            
          </div>
        </Col>
        <Col xs={8}>
        </Col>
      </Row>
    </div>
  )
}

export default About