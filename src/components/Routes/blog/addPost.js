import {React, useContext, useState} from 'react'
import { Container, Form, FormGroup, FormLabel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostContext from '../../../context/posts/postContext'
import { addImage } from '../../services/user-service'
import UserContext from '../../../context/posts/UserContext'

const AddPost = (props) => {

  const postcontext = useContext(PostContext);
  const usercontext = useContext(UserContext);
  const {addPost} = postcontext
  const {user} = usercontext

  const [data, setData] = useState({
    title:'',
    subTitle:'',
    content:'',
    image_location:'',
    category:'',
    comments:[{body:'',date:''}],
    meta:{votes:'',favs:''},
    published_date: new Date().toJSON(),
    publisher:user.username.toUpperCase(),
    updated_date:''
  });

  const submitForm=async(event)=>{
    event.preventDefault()
    console.log(data)
    let post = await addPost(data)
  }

  const handleupload = async()=>{
    const files = document.getElementById('image_location');
    console.log(files.files[0])
    const formData = new FormData();
    formData.append("files", files.files[0]);
    // console.log(formData)
    let upload = await addImage(formData)
    setData({...data,image_location:upload})
  }

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }

  return (
    <Container className='shadow-lg rounded-3 m-2'>
    <Row>
      <Col md={12} className=''>
        <div className='bg-white form h-100 p-5'>
        <h3 className='text-bold text-center'>ADD POST</h3>
          <Form onSubmit={submitForm} className='mb-5'>
            <Row className='p-2'>
              <Col md={6}>
                <FormGroup md={5}>
                    <FormLabel>Title *</FormLabel>
                    <Form.Control required type='text' placeholder='' name='title' id='title' onChange={(e)=>handleChange(e,'title')}></Form.Control>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup md={5}>
                    <FormLabel>Sub Title </FormLabel>
                    <Form.Control type='text' placeholder='' name='subTitle' id='subTitle' onChange={(e)=>handleChange(e,'subTitle')}></Form.Control>
                </FormGroup>
              </Col>
            </Row>
            <Row className='p-2'>
              <Col md={12}>
                <FormGroup md={5}>
                    <FormLabel>Content *</FormLabel>
                    <Form.Control required as='textarea' rows={3} placeholder='Your content' name='content' id='content' onChange={(e)=>handleChange(e,'content')}></Form.Control>
                </FormGroup>
              </Col>
            </Row>
            <Row className='p-2'>
              <Col md={6}>
                <FormGroup md={5}>
                    <FormLabel>Category *</FormLabel>
                    <Form.Control required type='text' placeholder='Enter category' name='category' id='category' onChange={(e)=>handleChange(e,'category')}></Form.Control>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup md={5}>
                    <FormLabel>Image</FormLabel>
                    <Form.Control type='file' placeholder='' name='image_location' id='image_location' onChange={(e)=>handleChange(e,'image_location')}></Form.Control>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup md={2}>
                    <FormLabel></FormLabel>
                    <Form.Control type='button' value={'Upload'} className='btn rounded-3 bg-dark text-light mt-4' style={{backgroundColor:'#222a47'}} onClick={(e)=>handleupload()}></Form.Control>
                </FormGroup>
              </Col>
            </Row>
            <Row className='justify-content-center' style={{'textAlign':'center'}}>
              <Col md={5}>
                <FormGroup md={3} style={{'float':'none'}}>
                  <Form.Control type='submit' value={'Post'} className='btn rounded-3 bg-dark text-light mt-4 py-2 px-4' style={{backgroundColor:'#222a47'}}></Form.Control>
                </FormGroup>
              </Col>
            </Row>
        </Form>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default AddPost