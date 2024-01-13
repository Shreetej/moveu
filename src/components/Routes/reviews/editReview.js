import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, FormGroup, FormLabel,Col,Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { addImage, editReview } from '../../services/user-service'
import { toast } from 'react-toastify';

const EditReview = (props) => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    name:'',
    designation:'',
    review:'',
    image_location:'',
    published_date:'',
    publisher:'',
    updated_date:new Date().toJSON()
  });

  const handleupload = async()=>{
    const files = document.getElementById('image_location');
    console.log(files.files[0])
    const formData = new FormData();
    formData.append("files", files.files[0]);
    // console.log(formData)
    let upload = await addImage(formData)
    setData({...data,image_location:upload})
  }

  const handleSave=async()=>{
    let savedData = await editReview(data)
  }

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
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className=''>
                <Form className='mb-5' onSubmit={handleSave}>
                  <Row className='p-2'>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Name *</FormLabel>
                        <Form.Control required type='text' placeholder='' name='name' id='name' value={props.review.name} onChange={(e) => handleChange(e, 'name')}></Form.Control>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Designation *</FormLabel>
                        <Form.Control type='text' placeholder='' name='designation' id='designation' value={props.post.designation} onChange={(e) => handleChange(e, 'designation')}></Form.Control>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={12}>
                      <FormGroup md={5}>
                        <FormLabel>Review *</FormLabel>
                        <Form.Control required as='textarea' rows={3} placeholder='Your content' name='review' id='review' value={props.review.review} onChange={(e) => handleChange(e, 'review')}></Form.Control>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={6}>
                      <FormGroup md={5}>
                        <FormLabel>Image</FormLabel>
                        <Form.Control type='file' placeholder='' name='image_location' id='image_location' onChange={(e) => handleupload()}></Form.Control>
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
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditReview