import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BalancedDiet from '../../../images/wellness/healthydiet2.jpeg'
import Exercise from '../../../images/wellness/exercise.jpg'
import Sleep from '../../../images/wellness/sleep.jpg'
import EnjoyLife from '../../../images/wellness/happyguy.jpg'

const Wellness=()=> {
  const [cardDetails, setcardDetails] = useState();
  return (
    <>
    <div className='container my-3 text-center' >
      <h2>WELLNESS MAKES SENSE</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <CardGroup className='mx-2'>
      <Card className='mx-3'>
        <Card.Img variant="top" src={BalancedDiet} />
        <Card.Body>
          <Card.Title>Healthy Diet</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3'>
        <Card.Img variant="top" src={Exercise} />
        <Card.Body>
          <Card.Title>Exercise</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3'>
        <Card.Img variant="top" src={Sleep} />
        <Card.Body>
          <Card.Title>Sleep</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3'>
        <Card.Img variant="top" src={EnjoyLife} style={{maxheight:'200px'}}/>
        <Card.Body>
          <Card.Title>Enjoy Life</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default Wellness
