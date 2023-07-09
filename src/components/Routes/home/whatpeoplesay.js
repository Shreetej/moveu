import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Model1 from '../../../images/WhatPeoplesay/modeltint1.jpg'
import Model2 from '../../../images/WhatPeoplesay/modeltint2.jpg'
import Model22 from '../../../images/WhatPeoplesay/Gayatri.jpeg'
import Model3 from '../../../images/WhatPeoplesay/modeltint3.jpg'
import Model4 from '../../../images/WhatPeoplesay/model4.jpg'
import bgCorp from '../../../images/WhatPeoplesay/bgcorporate2.jpg'
// import bgCorp1 from '../../../images/WhatPeoplesay/bgcorporate.jpg'
// import EnjoyLife from '../../../images/wellness/happyguy.jpg'

const Whatpeoplesay = () => {
    return (
        <div className='d-flex' style={{ backgroundImage: `url(${bgCorp})`, backgroundAttachment: 'fixed', justifyContent: 'center' }}>
            <div className='container m-0 p-4'>
                <h1 className='mt-3 text-center' >WHAT PEOPLE SAY</h1>
                {/* <div className='row row-col-1 row-cols-md-3 justify-content-center'> */}
                <CardGroup className='rounded'>
                    {/* <Col sm={6} md={3} className='m-3'> */}
                    <Card className='shadow-lg mx-3 rounded-4' style={{ backgroundColor: '#86b9d1' }}>
                        <Card.Img variant='bottom' src={Model4} className='opacity-50 p-2' style={{ objectFit: 'contain', borderRadius: '50%' }} />
                        {/* <Card.ImgOverlay className='' > */}
                        <Card.Body >
                            <Card.Title className='fs-4 fw-bold text-center' >Krishna Godwani<p></p></Card.Title>
                            <Card.Subtitle className='text-center fs-5'>Ex. Navy Retired Captain</Card.Subtitle>
                            <Card.Text className='fs-6 p-3' style={{ contain: "content" }}>
                                " I started with Moveu 3 years ago because i was having severe back pain and was facing difficulties in balancing myself. After 3 months i was pain-free and felt more strong and balanced while walking.
                                I havent missed the class even once , because it's for me and Vikas makes it so interesting that you don't wanna miss a single day. "
                            </Card.Text>
                        </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                    {/* </Col> */}
                    {/* <Col sm={6} md={3} className='m-3'> */}
                    <Card className='shadow-lg mx-3 rounded-4' style={{ backgroundColor: '#86b9d1' }}>
                        <Card.Img variant="" src={Model22} className='opacity-50 rounded-circle  p-4' style={{ objectFit: 'cover' }} />
                        {/* <Card.ImgOverlay> */}
                        <Card.Body>
                            <Card.Title className='fs-4 fw-bold text-center'>Gayatri</Card.Title>
                            <Card.Subtitle className='text-center fs-5'>Head, Air India Operations, Myanmar</Card.Subtitle>
                            <Card.Text className='fs-6 p-3' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                                " In this long memorable Journey from a couch potato to a svelte image it has been no mean feat.
                                Only a good coach will show you the way and guide you and definitely not youtube tutorials.
                                The results  speaks volumes about the good guidance and a strong belief in what we are doing "
                            </Card.Text>
                        </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                    {/* </Col> */}
                    {/* <Col sm={6} md={3} className='m-3'> */}
                    <Card className='shadow-lg mx-3 rounded-4' style={{ backgroundColor: '#86b9d1' }}>
                        <Card.Img variant="top" src={Model1} className='opacity-50 rounded-circle  p-4' style={{ objectFit: 'cover' }} />
                        {/* <Card.ImgOverlay className=''> */}
                        <Card.Body>
                            <Card.Title className='fs-4 fw-bold text-center'>Mitch Crites</Card.Title>
                            <Card.Subtitle className='text-center fs-5'>IT employee</Card.Subtitle>
                            <Card.Text className='fs-6 p-3 text-justify' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                                I am an overweight American man, 79 years of age, who has never done much sport or exercise throughout my whole life.  
                                Fortunately, I was introduced to Vikas Rathi, an expert and sensitive trainer in Delhi who specializes in working with the older generation. Vikas has completely changed my life.  For the last twenty years I’ve walked with a cane for balance and stability and I’ve thrown the cane away!  I now walk straight and confidently and far greater distances than before.  I am also more flexible and have greater mobility.
                            </Card.Text>
                        </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                    {/* </Col> */}
                </CardGroup>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Whatpeoplesay
