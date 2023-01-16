import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, FormLabel,Col,Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const EditPost = (props) => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    title:'',
    subTitle:'',
    content:'',
    image_location:'',
    category:'',
    comments:[{body:'',date:''}],
    meta:{votes:'',favs:''},
    published_date:Date.now(),
    publisher:'',
    updated_date:''
  });

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size='lg' show={props.show} onHide={handleClose} backdrop='static' keyboard='false'>
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
                        <Form.Control required type='text' placeholder='' name='title' id='title' value={props.post.title} onChange={(e) => handleChange(e, 'title')}></Form.Control>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Sub Title </FormLabel>
                        <Form.Control type='text' placeholder='' name='subTitle' id='subTitle' value={props.post.subTitle} onChange={(e) => handleChange(e, 'subTitle')}></Form.Control>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={12}>
                      <FormGroup md={5}>
                        <FormLabel>Content *</FormLabel>
                        <Form.Control required as='textarea' rows={3} placeholder='Your content' name='content' id='content' value={props.post.content} onChange={(e) => handleChange(e, 'content')}></Form.Control>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Category *</FormLabel>
                        <Form.Control required type='text' placeholder='Enter category' name='category' id='category' value={props.post.category} onChange={(e) => handleChange(e, 'category')}></Form.Control>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Image</FormLabel>
                        <Form.Control type='file' placeholder='' name='image_location' id='image_location' value={props.post.image_location} onChange={(e) => handleChange(e, 'image_location')}></Form.Control>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost