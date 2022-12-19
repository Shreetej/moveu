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
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>"The Best Investment you could ever make is in you own health"</h2>
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
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>“Those who think they have not time for bodily exercise will sooner or later have to find time for illness.” - Edward Stanley</h2>
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
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>"Success is what comes after your stop making excuses." –Luis Galarza</h2>
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
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>"Train hard, turn up, run your best, and the rest will take care of itself."
          </h2>
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
          <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>Life begins at the end of your comfort zone.</h2>
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
          {/* <h2 style={{color:'lightsteelblue',maxWidth:'40vw'}}>"I hate every minute of training. But I said, don’t quit. Suffer now and live the rest of your life as a champion." -Mohammed Ali</h2> */}
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