import { React, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Runninggirl from '../../../images/homeCarousel/runninggirl.jpg'
import Stretching from '../../../images/homeCarousel/stretching.jpg'
import CorporateWellness from '../../../images/homeCarousel/CorporateWellness.jpg'
import GroupLeader from '../../../images/homeCarousel/corporate-leader.jpg'
import BallExercise from '../../../images/homeCarousel/corporatefitnessprogramsandproviders.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Nav } from 'react-bootstrap';
import Wellness from './wellness';
import Whatpeoplesay from './whatpeoplesay';
import Slider from './Slider';
import ServicesInHome from './servicesInHome/servicesInHome';
import VideoPlayer from './videoPlayer';

const Home = (props) => {
  // const navigate = useNavigate();

  // // // Carousel on homepage
  // // function Reroute(){
  // //   useEffect(() => {
  // //     return () => {
  // //       navigate('/contact')
  // //     }
  // //   },[])
  // // }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Slider />
      <div className='d-block'>
        <Carousel controls={true} indicators={true}>
          <Carousel.Item style={{ maxHeight: '85vh' }}>
            <img
              className="d-block w-100"
              src={Runninggirl}
              alt="First slide"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Carousel.Caption className="d-none d-lg-block" style={{ position: 'absolute', top: '8px', left: '16px' }}>
              <h2 style={{ color: 'lightsteelblue', maxWidth: '40vw' }}>"The Best Investment you could ever make is in you own health"</h2>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button as={Link} className='opacity-75' to='/contact'>Schedule a Demo</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ maxHeight: '85vh' }}>
            <img
              className="d-block w-100"
              src={BallExercise}
              alt="Second slide"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Carousel.Caption className="d-none d-lg-block" style={{ position: 'absolute', top: '8px', left: '16px' }}>
              <h2 style={{ color: 'lightsteelblue', maxWidth: '40vw' }}>
                {/* “Those who think they have not time for bodily exercise will sooner or later have to find time for illness.” - Edward Stanley */}
              </h2>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button as={Link} className='opacity-75' to='/contact'>Schedule a Demo</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-85vh' >
            <img
              className="d-block w-100"
              src={Stretching}
              alt="Third slide"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Carousel.Caption className="d-none d-lg-block" style={{ position: 'absolute', top: '8px', left: '16px' }}>
              <h2 style={{ color: 'lightsteelblue', maxWidth: '40vw' }}>"Success is what comes after your stop making excuses." –Luis Galarza</h2>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button as={Link} className='opacity-75' to='/contact'>Schedule a Demo</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ maxHeight: '85vh' }}>
            <img
              className="d-block w-100"
              src={CorporateWellness}
              alt="forth slide"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Carousel.Caption className="d-none d-lg-block"style={{ position: 'absolute', top: '8px', left: '16px' }}>
              <h2 style={{ color: 'lightsteelblue', maxWidth: '50vw' }}>
                {/* "Train hard, turn up, run your best, and the rest will take care of itself." */}
              </h2>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button as={Link} className='opacity-75' to='/contact'>Schedule a Demo</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ maxHeight: '85vh' }}>
            <img
              className="d-block w-100"
              src={GroupLeader}
              alt="Fifth slide"
              style={{ backgroundAttachment: 'fixed' }}
            />
            <Carousel.Caption className="d-none d-lg-block" style={{ position: 'absolute', top: '8px', left: '16px' }}>
              <h2 style={{ color: 'lightsteelblue', maxWidth: '40vw' }}>Life begins at the end of your comfort zone.</h2>
            </Carousel.Caption>
            <Carousel.Caption>
              <Button as={Link} className='opacity-75 ' to='/contact'>Schedule a Demo</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <VideoPlayer />
      <ServicesInHome />
      <Wellness />
      <Whatpeoplesay />
    </>
  );
}

export default Home;