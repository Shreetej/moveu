import {React} from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BalancedDiet from '../../../images/wellness/healthydiet2.jpeg'
import Exercise from '../../../images/wellness/exercise.jpg'
import Sleep from '../../../images/wellness/sleep.jpg'
import EnjoyLife from '../../../images/wellness/happyguy.jpg'

const Wellness=()=> {

  return (
    <>
    <div className='container my-3 text-center' >
      <h2>WELLNESS MAKES SENSE</h2>
      <p>Trained exercise & diet is much needed in this stressed & busy world to ensure that health remains perfect. </p>
      <CardGroup className='mx-2'>
      <Card className='mx-3 shadow-lg'>
        <Card.Img variant="top" src={BalancedDiet} />
        <Card.Body>
          <Card.Title>Healthy Diet</Card.Title>
          <Card.Text>
          A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3 shadow-lg'>
        <Card.Img variant="top" src={Exercise} />
        <Card.Body>
          <Card.Title>Exercise</Card.Title>
          <Card.Text>
          Research shows that physical activity can also boost self-esteem, mood, sleep quality and energy, as well as reducing your risk of stress, clinical depression
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3 shadow-lg'>
        <Card.Img variant="top" src={Sleep} />
        <Card.Body>
          <Card.Title>Sleep</Card.Title>
          <Card.Text>
          Adequate sleep helps with hormonal balance. That keeps your heart healthy, reduces stress, and helps keep blood sugar consistent. It also reduces stress, prevents inflammation, and helps control weight.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-3 shadow-lg'>
        <Card.Img variant="top" src={EnjoyLife} style={{maxheight:'200px'}}/>
        <Card.Body>
          <Card.Title>Enjoy Life</Card.Title>
          <Card.Text>
            Being with companions & enjoying what you do improves your mood. Thus increase ability to focus instead of being stressed.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default Wellness
