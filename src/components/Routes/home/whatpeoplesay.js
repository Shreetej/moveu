import React from 'react'
import { Card,CardGroup} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Model1 from '../../../images/WhatPeoplesay/modeltint1.jpg'
import Model2 from '../../../images/WhatPeoplesay/modeltint2.jpg'
import Model3 from '../../../images/WhatPeoplesay/modeltint3.jpg'
import bgCorp from '../../../images/WhatPeoplesay/bgcorporate2.jpg'
import bgCorp1 from '../../../images/WhatPeoplesay/bgcorporate.jpg'
// import EnjoyLife from '../../../images/wellness/happyguy.jpg'

const Whatpeoplesay=()=> {
  return (
    <div className=''>
    <div className='mx-auto my-5 p-4' style={{backgroundImage:`url(${bgCorp})`, backgroundAttachment:'fixed'}}>
        <h2 className='text-center' >WHAT PEOPLE SAY</h2>
        <div className='row row-col-1 row-cols-md-3 justify-content-center'>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant='top' src={Model3} className='opacity-50' style={{objectFit:'contain'}}/>
            <Card.ImgOverlay className='' >
                <Card.Title className='fs-4 fw-bold text-center' >Krishna Godwani<p></p></Card.Title>
                <Card.Subtitle className='text-center fs-5'>Ex. Navy Retired Captain</Card.Subtitle>
                <Card.Text className='text-justify fs-6 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
                ​I started with Moveu 3 years ago because i was having severe back pain and was facing difficulties in balancing myself. After 3 months i was pain-free and felt more strong and balanced while walking. 
                I havent missed the class even once , because it's for me and Vikas makes it so interesting that you don't wanna miss a single day.
                </Card.Text>
                <Card.Text className='fs-1 text-center'>"</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant="top" src={Model2} className='opacity-50' style={{objectFit:'cover'}}/>
            <Card.ImgOverlay>
            <Card.Title className='fs-4 fw-bold text-center'>Arun Maurya</Card.Title>
            <Card.Subtitle className='text-center fs-5'>Architect</Card.Subtitle>
            <Card.Text className='fs-5 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
            Never Thought A 45 Mins Zumba Session can me feel Stress free &
                Happy,  I keep Looking Forward for Wedneday Zumba Sessions
            </Card.Text>
            <h1 className='text-center'>"</h1>
            </Card.ImgOverlay>
        </Card>
        </Col>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant="top" src={Model1} className='opacity-50' style={{objectFit:'cover'}}/>
            <Card.ImgOverlay>
            <Card.Title className='fs-4 fw-bold text-center'>Ram Shrasti</Card.Title>
            <Card.Subtitle className='text-center fs-5'>IT employee</Card.Subtitle>
            <Card.Text className='fs-5 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
            Exercise helped me overcome anxiety & gave a positive start to the journey of my life.
            </Card.Text>
            <h1 className='text-center'>"</h1>
            </Card.ImgOverlay>
        </Card>
        </Col>
        </div>
    </div>
    </div>    
  )
}

export default Whatpeoplesay
