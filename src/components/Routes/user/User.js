import React, { useEffect, useState, useContext, useRef } from 'react'
import { Accordion, Button, Container, Form, Modal, Row, Col, FormGroup, FormLabel } from 'react-bootstrap'
import { GetUsers,ResetUserPassword} from '../../services/user-service'
import userContext from '../../../context/users/UserContext'
import AddUser from './addUser'

const getUsers = async (setusers, user) => {
  let users = await GetUsers()
  console.log(users)
  let usernames = users.map((data) => data.username)
  const index = usernames.indexOf(user);
  if (index > -1) { // only splice array when item is found
    users.splice(index, 1); // 2nd parameter means remove one item only
  }
  console.log(users)
  setusers(users)
  // return usernames
}

const User = (props) => {
  const [users, setUsers] = useState([]);
  const usercontext = useContext(userContext);
  const { user } = usercontext;
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [showUser, setShowuser] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (userName,Email) => {
    setShow(true);
    setUserdetails({...userdetails,username:userName,email:Email})
  }
  const handleCloseuser = () => setShowuser(false);
  const handleShowuser = () => setShowuser(true);
  const [userdetails, setUserdetails] = useState({
    username:'',
    password:'',
    email:''
  });

  const handleChange=(event,property)=>{
    setUserdetails({...userdetails,[property]:event.target.value})
  }

  const resetPassword=()=>{
    console.log(userdetails)
    ResetUserPassword(userdetails)
  }

  useEffect(() => {
    getUsers(setUsers, user.username)
    // setusernames(userlist)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <>
        <Button className='d-block' onClick={()=>handleShowuser()}>Add User</Button>
        <Modal show={showUser} size='lg' onHide={handleCloseuser}>
          <Modal.Header closeButton>Add User</Modal.Header>
          <Modal.Body>
            <AddUser/>
          </Modal.Body>
        </Modal>
      </>
      <Container>
        <h1>Users</h1>
        {users.map((data) =>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {data.username}
              </Accordion.Header>
              <Accordion.Body>

                <Button className='d-none'  variant="primary" onClick={()=>handleShow(data.username,data.email)}>
                  Launch demo modal
                </Button>

                <Modal size='sm' show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className='mb-5'>
                      <Row className='p-2'>
                        <Col md={12}>
                          <FormGroup md={5}>
                            <FormLabel>Default Password</FormLabel>
                            <Form.Control required type='password' placeholder='' name='password' id='password'  onChange={(e) => handleChange(e, 'password')}></Form.Control>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => resetPassword(data)}>
                      Save Password
                    </Button>
                  </Modal.Footer>
                </Modal>
                <>
                  <h4>{data.email}</h4>
                  <Button ref={ref} onClick={()=>handleShow(data.username,data.email)}>Reset Password</Button>
                </>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Container>
    </div>
  )
}

export default User