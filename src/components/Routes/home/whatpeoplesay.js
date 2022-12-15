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
    <div className='mx-auto my-5 p-4 text-center' style={{backgroundImage:`url(${bgCorp})`, backgroundAttachment:'fixed'}}>
        <h2 className=''>WHAT PEOPLE SAY</h2>
        <div className='row row-col-1 row-cols-md-3 justify-content-center'>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant='top' src={Model3} className='opacity-50' style={{objectFit:'contain'}}/>
            <Card.ImgOverlay className=''>
                <Card.Title className='fs-4 fw-bold'>Krishna Godwani<p></p></Card.Title>
                <Card.Text className='fs-5 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
                ​Never Thought A 45 Mins Zumba Session can me feel Stress free &
                Happy,  I keep Looking Forward for Wedneday Zumba Sessions
                </Card.Text>
                <Card.Text className='fs-1'>"</Card.Text>
            </Card.ImgOverlay>
        </Card>
        </Col>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant="top" src={Model2} className='opacity-50' style={{objectFit:'cover'}}/>
            <Card.ImgOverlay>
            <Card.Title className='fs-4 fw-bold'>Exercise</Card.Title>
            <Card.Text className='fs-5 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
            The Yoga & meditation gives a positive Start to the day & also has helped with my
            lower back ache.
            </Card.Text>
            <h1>"</h1>
            </Card.ImgOverlay>
        </Card>
        </Col>
        <Col sm={6} md={3} className='m-3'>
        <Card className='shadow-lg'>
            <Card.Img variant="top" src={Model1} className='opacity-50' style={{objectFit:'cover'}}/>
            <Card.ImgOverlay>
            <Card.Title className='fs-4 fw-bold'>Sleep</Card.Title>
            <Card.Text className='fs-5 p-3' style={{overflowY:'auto',overflowX:'hidden'}}>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
            </Card.Text>
            <h1>"</h1>
            </Card.ImgOverlay>
        </Card>
        </Col>
        </div>
    </div>
    {/* <div className='container-fluid' style={{backgroundImage:'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)', opacity:'80%',zIndex:'-1'}}> */}
        {/* <h2 className='text-center p-3'>WHAT PEOPLE SAY</h2> */}
        {/* <div className='m-4' style={{display:'inline-flex',textAlign:'center',zIndex:'2'}}> */}
        
            {/* <div className='bg-secondary m-5 p-5' style={{backgroundImage:'url(https://images.unsplash.com/photo-1670258880446-e1109e1d0896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80)',backgroundSize:'contain',backgroundRepeat:'inherit', zIndex:'2'}}>
                <h2>Trisha Godwani</h2>
                <p>Never Thought A 45 Mins Zumba Session can me feel Stress free &
                Happy,  I keep Looking Forward for Wedneday Zumba Sessions</p> */}
                {/* <img src={Model1} ></img> */}
            {/* </div> */}
            {/* <div className='container bg-secondary m-5 p-5' style={{backgroundImage:'url(https://images.unsplash.com/photo-1663814911505-422a20030701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80)'}}>
                <h2>Kumar Rathi</h2>
                <p>The Yoga & meditation gives a positive Start to the day & also has helped with my lower back ache.</p>
            </div> */}
            {/* <div className='container bg-secondary m-5 p-5' style={{backgroundImage:'url(https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)'}}>
                <h2>Ram Shrasti</h2>
                <p>Exercise helped me overcome anxiety & gave a positive start to the journey of my life.</p>
            </div> */}
        </div>
        // </div>
    // </div>
    
  )
}

export default Whatpeoplesay
