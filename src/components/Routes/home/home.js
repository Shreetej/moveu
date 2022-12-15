import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Runninggirl from '../../../images/homeCarousel/runninggirl.jpg'
import EveningExercise from '../../../images/homeCarousel/yoga.jpg'
import Stretching from '../../../images/homeCarousel/stretching.jpg'
import CorporateWellness from '../../../images/homeCarousel/CorporateWellness.jpg'
import GroupLeader from '../../../images/homeCarousel/corporate-leader.jpg'
import Corptrgfeatured from '../../../images/homeCarousel/CorporateTrainingfeatured.png'
import BallExercise from '../../../images/homeCarousel/corporatefitnessprogramsandproviders.jpg'

import { Button } from 'react-bootstrap';
import Wellness from './wellness';
import Whatpeoplesay from './whatpeoplesay';

const Home=()=> {
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
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={BallExercise}
          alt="Second slide"
          style={{backgroundAttachment:'fixed'}}
        />
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
        <Carousel.Caption>
          <Button className='opacity-75'>Schedule a Demo</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'85vh'}}>
        <img
          className="d-block w-100"
          src={Corptrgfeatured}
          alt="Sixth slide"
          style={{backgroundAttachment:'fixed'}}
        />
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