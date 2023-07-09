import { React, useContext, useEffect, useState, useRef } from 'react'
import postContext from '../../../context/posts/postContext';
import userContext from '../../../context/posts/UserContext';
import { Card, Button, Modal, Form, FormLabel, FormGroup, Col, Row, Container, CardGroup } from 'react-bootstrap'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { addImage } from '../../services/user-service';
import { BASE_URL } from '../../services/helper';
import AddPost from '../blog/addPost';

const Blog = () => {

  const { posts, getPosts, editPost, deletePost } = useContext(postContext);
  const { user } = useContext(userContext);
  const [show, setShow] = useState(false);
  const [addshow, setAddshow] = useState(false);
  const ref = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddClose = () => setAddshow(false);
  const handleAddShow = () => setAddshow(true);
  const [data, setData] = useState({
    title: '',
    subTitle: '',
    content: '',
    image_location: '',
    category: '',
    comments: [{ body: '', date: '' }],
    meta: { votes: '', favs: '' },
    published_date: Date.now(),
    publisher: '',
    updated_date: ''
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

  const handleEditPost = (post) => {
    setData(post)
    ref.current.click();
  }

  const saveEditedPost = async (post) => {
    let savedPost = await editPost(data);
    //console.log('savedPost')
    handleClose();
  }

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  }, [])

  console.log(posts)
  console.log(user.username.toUpperCase())
  const userposts = posts.filter(data => { console.log(data.publisher); if((data.publisher!=null)&&(data.publisher?.toUpperCase()!=='SHREETEJ')) return data.publisher.toUpperCase() === user?.username.toUpperCase(); else if(data.publisher?.toUpperCase()==='SHREETEJ') return posts; else return null });
  console.log(userposts)

  return (
    <div>
      <Button className='w-100' variant='primary' onClick={()=>handleAddShow()}>Add Post</Button>
      <Modal size='lg' show={addshow} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddPost />
        </Modal.Body>
      </Modal>
      {/*Edit Post*/}
      <Button className='d-none' ref={ref} variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className=''>
              <Form className='mb-5'>
                <Row className='p-2'>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Title *</FormLabel>
                      <Form.Control required type='text' placeholder='' name='title' id='title' value={data.title} onChange={(e) => handleChange(e, 'title')}></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Sub Title </FormLabel>
                      <Form.Control type='text' placeholder='' name='subTitle' id='subTitle' value={data.subTitle} onChange={(e) => handleChange(e, 'subTitle')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={12}>
                    <FormGroup md={5}>
                      <FormLabel>Content *</FormLabel>
                      <Form.Control required as='textarea' rows={3} placeholder='Your content' name='content' id='content' value={data.content} onChange={(e) => handleChange(e, 'content')}></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={6}>
                    <FormGroup md={5}>
                      <FormLabel>Category *</FormLabel>
                      <Form.Control required type='text' placeholder='Enter category' name='category' id='category' value={data.category} onChange={(e) => handleChange(e, 'category')}></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup md={5}>
                      <FormLabel>Image</FormLabel>
                      <Form.Control type='file' placeholder='' name='eimage_location' id='eimage_location' onChange={(e) => handleChange(e, 'image_location')} ></Form.Control>
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
          <Button variant="primary" onClick={() => saveEditedPost(data)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Container xs={6}>
        <Row xs={1} md={2}>
        {userposts.map((data) =>
          <Col>
          <Card key={data.id} className='m-3 shadow-lg' xs={3}>
            <Card.Body>
              {user.username !== null && <div className='d-flex justify-content-end'>
                <FaEdit className='m-2' size={20} onClick={() => handleEditPost(data)} />
                <FaTrashAlt className='m-2' size={20} onClick={() => deletePost(data._id)} />
              </div>}
              <Card.Header style={{ backgroundColor: '#302c2c', color: 'white' }}>{data.title}</Card.Header>
              {data.image_location !== '' && <Card.Img variant='top' src={BASE_URL + '/posts/upload/' + data.image_location} />}
              <Card.Title className='mt-2'>{data.subTitle}</Card.Title>
              <Card.Text style={{ 'whiteSpace': 'pre-wrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>{data.content}</Card.Text>
              <Card.Footer className="d-flex text-muted" style={{ justifyContent: 'space-between' }}><div>{getAge(data.published_date)}</div>
                <div>#{data.category}</div>
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

export default Blog