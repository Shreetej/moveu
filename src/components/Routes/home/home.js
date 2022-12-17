import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Runninggirl from '../../../images/homeCarousel/runninggirl.jpg'
import Stretching from '../../../images/homeCarousel/stretching.jpg'
import CorporateWellness from '../../../images/homeCarousel/CorporateWellness.jpg'
import GroupLeader from '../../../images/homeCarousel/corporate-leader.jpg'
import Corptrgfeatured from '../../../images/homeCarousel/CorporateTrainingfeatured.png'
import BallExercise from '../../../images/homeCarousel/corporatefitnessprogramsandproviders.jpg'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Wellness from './wellness';
import Whatpeoplesay from './whatpeoplesay';

const Home=()=> {

  // Carousel on homepage

  return (
    <>
    <div className='d-block'>
    <Carousel controls={false} indicators={false}>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={Runninggirl}
          alt="First slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button as={Link} className='opacity-75' to='/contact'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={BallExercise}
          alt="Second slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={Stretching}
          alt="Third slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={CorporateWellness}
          alt="forth slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={GroupLeader}
          alt="Fifth slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className='opacity-75' href='/contact'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={Corptrgfeatured}
          alt="Sixth slide"
          style={{backgroundAttachment:'fixed'}}
        />
        <Carousel.Caption style={{position:'absolute', top:'8px',left:'16px'}}>
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
        </Carousel.Caption>
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Wellness/>
    <Whatpeoplesay/>
    </>
  );
}

export default Home;