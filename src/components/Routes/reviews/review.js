import { React, useState, useEffect, useContext, useRef } from 'react'
import { Card, Row, Col, Container, Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import ElderlyImage from '../../../images/blog/wphealthyquote.jpg'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
import userContext from '../../../context/users/UserContext';
import { addImage, deleteReview } from '../../services/user-service';
import { BASE_URL } from '../../services/helper';
import ReviewContext from '../../../context/reviews/ReviewContext';
import AddReview from './addReview';


const Review = () => {

  const { reviews, getreviews, editreview, setreviews} = useContext(ReviewContext);
  const { user } = useContext(userContext);

  const [show, setShow] = useState(false);
  const [addshow, setAddshow] = useState(false);
  const ref = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddClose = () => setAddshow(false);
  const handleAddShow = () => setAddshow(true);

  const [data, setData] = useState({
    name:'',
    designation:'',
    review:'',
    image_location:'',
    published_date: '',
    publisher:'',
    updated_date:''
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })
  }

  function getAge(date) {
    let diffTime = new Date().getTime() - new Date(date).getTime();
    // let diffDays = Math.round(diffTime/(1000*3600*24))
    let seconds = Math.floor(diffTime / 1000),
      minutes = Math.floor(seconds / 60),
      hours = Math.floor(minutes / 60),
      days = Math.floor(hours / 24),
      months = Math.floor(days / 30),
      years = Math.floor(days / 365);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;

    if (years > 1) {
      return date
    } else if (months > 1) {
      return months + " months ago"
    } else if (days > 1) {
      return days + " days ago"
    } else if (hours > 1) {
      return hours + " hours ago"
    } else if (minutes > 1) {
      return minutes + " minutes ago"
    } else if (seconds > 1) {
      return seconds + " seconds ago"
    }
  }

  const handleupload = async () => {
    const files = document.getElementById('eimage_location');
    console.log(files.files[0])
    const formData = new FormData();
    formData.append("files", files.files[0]);
    let upload = await addImage(formData)
    setData({ ...data, image_location: upload })
  }

  const handleEditReview = (review) => {
    setData(review)
    ref.current.click();
  }

  const saveEditedReview = async (review) => {
    let savedReview = await editreview(data);
    //console.log('savedPost')
    handleClose();
  }

  useEffect(() => {
    getreviews()
        // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Button className='w-100' variant='primary' onClick={()=>handleAddShow()}>Add Review</Button>
      <Modal size='lg' show={addshow} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddReview />
        </Modal.Body>
      </Modal>
      {/*Edit Review*/}
      <Button className='d-none' ref={ref} variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className=''>
              <Form className='mb-5'>
                <Row className='p-2'>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Name *</FormLabel>
                      <Form.Control required type='text' placeholder='' name='name' id='name' value={data.name} onChange={(e) => handleChange(e, 'name')}></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Designation *</FormLabel>
                      <Form.Control type='text' placeholder='' name='designation' id='designation' value={data.designation} onChange={(e) => handleChange(e, 'designation')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={12}>
                    <FormGroup md={5}>
                      <FormLabel>Review *</FormLabel>
                      <Form.Control required as='textarea' rows={3} placeholder='Your content' name='review' id='review' value={data.review} onChange={(e) => handleChange(e, 'review')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={4}>
                    <FormGroup md={5}>
                      <FormLabel>Image</FormLabel>
                      <Form.Control type='file' placeholder='' name='eimage_location' id='eimage_location' onChange={(e) => handleChange(e, 'eimage_location')} ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup md={2}>
                      <FormLabel></FormLabel>
                      <Form.Control type='button' value={'Upload'} className='btn rounded-3 bg-dark text-light mt-4' style={{ backgroundColor: '#222a47' }} onClick={(e) => handleupload()}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveEditedReview(data)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container xs={6}>
        <Row xs={1} md={2}>
        {reviews.map((data) =>
          <Col>
          <Card key={data.id} className='m-3 shadow-lg' xs={3}>
            <Card.Body>
              {user.username !== null && <div className='d-flex justify-content-end'>
                <FaEdit className='m-2' size={20} onClick={() => handleEditReview(data)} />
                <FaTrashAlt className='m-2' size={20} onClick={() => deleteReview(data._id)} />
              </div>}
              <Card.Header style={{ backgroundColor: '#302c2c', color: 'white' }}>{data.name}</Card.Header>
              {data.image_location !== '' && <Card.Img variant='top' src={BASE_URL + '/uploads/' + data.image_location} />}
              <Card.Title className='mt-2'>{data.designation}</Card.Title>
              <Card.Text style={{ 'whiteSpace': 'pre-wrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>{data.review}</Card.Text>
              <Card.Footer className="d-flex text-muted" style={{ justifyContent: 'space-between' }}><div>{getAge(data.published_date)}</div>
                <div>{data.publisher}</div>
              </Card.Footer>
            </Card.Body>
          </Card>
          </Col>
        )}
        </Row>
      </Container>
        {/* </h1> */}
    </div>
  )
}

export default Review