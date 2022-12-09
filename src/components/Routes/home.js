import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Runninggirl from '../../images/homeCarousel/runninggirl.jpg'
import EveningExercise from '../../images/homeCarousel/yoga.jpg'
import Stretching from '../../images/homeCarousel/stretching.jpg'
import { Button } from 'react-bootstrap';
import Wellness from './home/wellness';
import Whatpeoplesay from './home/whatpeoplesay';

const Home=()=> {
  return (
    <>
      <div className='' style={{backgroundAttachment:'fixed'}}>
    <Button variant='light' style={{position:'absolute',top:'80%',left:'50%',zIndex:'1',transform: 'translate(-50%, -50%)'}} >Schedule a Demo</Button>
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Runninggirl}
          alt="First slide"
          style={{backgroundAttachment:'fixed'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={EveningExercise}
          alt="Second slide"
          style={{backgroundAttachment:'fixed'}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Stretching}
          alt="Third slide"
          style={{backgroundAttachment:'fixed'}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <Wellness/>
    <Whatpeoplesay/>
    </>
  
  );
}

export default Home;