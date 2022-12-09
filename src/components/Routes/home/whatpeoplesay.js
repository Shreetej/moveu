import React from 'react'
import { Card,CardGroup,Image } from 'react-bootstrap'
import Model1 from '../../../images/WhatPeoplesay/modeltint1.jpg'
import Model2 from '../../../images/WhatPeoplesay/modeltint2.jpg'
import Model3 from '../../../images/WhatPeoplesay/modeltint3.jpg'
import bgCorp from '../../../images/WhatPeoplesay/bgcorporate2.jpg'
import EnjoyLife from '../../../images/wellness/happyguy.jpg'

const Whatpeoplesay=()=> {
  return (
    <div className=''>
        <Image src={bgCorp}></Image>
    <div className='mx-auto my-5 p-4 text-center' style={{backgroundImage:'url("../../../images/WhatPeoplesay/bgcorporate2.jpg")'}}>
        <h2>WHAT PEOPLE SAY</h2>
        <CardGroup className=''>
        <Card className='m-5'>
            <Card.Img variant='top' src={Model3} className='opacity-50' />
            <Card.ImgOverlay>
            <Card.Title className='fs-2 fw-bold'>Healthy Diet</Card.Title>
            <Card.Text className='fs-4'>
            ​Never Thought A 45 Mins Zumba Session can me feel Stress free &
            Happy,  I keep Looking Forward for Wedneday Zumba Sessions
            </Card.Text>
            <Card.Text className='fs-1'>"</Card.Text>
            </Card.ImgOverlay>
        </Card>
        <Card className='m-5'>
            <Card.Img variant="top" src={Model2} className='opacity-50'/>
            <Card.ImgOverlay>
            <Card.Title className='fs-2 fw-bold'>Exercise</Card.Title>
            <Card.Text className='fs-4'>
            The Yoga & meditation gives a positive Start to the day & also has helped with my
lower back ache.
            </Card.Text>
            <h1>"</h1>
            </Card.ImgOverlay>
        </Card>
        <Card className='m-5'>
            <Card.Img variant="top" src={Model1} className='opacity-50'/>
            <Card.ImgOverlay>
            <Card.Title className='fs-2 fw-bold'>Sleep</Card.Title>
            <Card.Text className='fs-4'>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
            </Card.Text>
            <h1>"</h1>
            </Card.ImgOverlay>
        </Card>
        </CardGroup>
    </div>
    </div>
  )
}

export default Whatpeoplesay