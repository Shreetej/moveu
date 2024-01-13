import { React, useState, useEffect, useContext } from 'react'
import { Accordion, Col, Container,Row, Badge} from 'react-bootstrap'
import { GetEnquiry } from '../../services/user-service'
import ShowContact from './showContact'
import userContext from '../../../context/users/UserContext'
import { Link } from 'react-router-dom'
import { groupBy } from 'lodash'
import Enquiry from './enquiry'

const Contact = () => {

  const [enquiries, setenquiries] = useState('')
  const usercontext = useContext(userContext);
  const { user } = usercontext;

  const getEnquiries = async () => {
    let enquiry = await GetEnquiry();
    setenquiries(enquiry);
    // return enquiry;
  }

  useEffect(() => {
    getEnquiries()
    window.scrollTo(0, 0)
  }, [])

  const handleUnread=()=>{

  }

  const handleRead=()=>{

  }

  const getReadUnreadCount=()=>{
    const countOfEnquiries= {read:0,unread:0};
    let newlist = groupBy(enquiries,'read');
    Object.keys(newlist).forEach((e)=>{
      // console.log(e)
      // if(e==='false'){
      //   countOfEnquiries.unread=newlist[e].length
      // }else if(e==='true'){
      //   countOfEnquiries.read=newlist[e].length
      // }
      e=='false'?(countOfEnquiries.read=newlist[e].length):(countOfEnquiries.unread =newlist[e].length)
    });
    return countOfEnquiries;
  }

  const GetAllEnquiries = () => {
    if (enquiries.length > 0) {
      const newenquiries = groupBy(enquiries, 'email')
      console.log(newenquiries)
      return Object.entries(newenquiries).map(([key, value]) =>
        <Accordion.Item eventKey={key}>
          <Accordion.Header className='d-flex' style={{justifyContent:'space-between'}}><div><h6>{key}</h6></div><div className='mx-3'><Badge bg="dark">{value.length}</Badge></div></Accordion.Header>
          <Accordion.Body>
            {value.map(enq => <Enquiry enq={enq} />)}
          </Accordion.Body>
        </Accordion.Item>
      );
    } else {
      return <>No Enquiries to Display</>
    }
  }

  return (
    <div>
      <Container><h2 className='m-4' style={{textAlign:'center'}}><b>ENQUIRIES</b></h2></Container>
      {!user && <ShowContact />}
      {user &&
        <Container className='p-3'>
          <Row>
            <Col xs={3}>
              <Accordion defaultActiveKey='0' alwaysOpen style={{}}>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Inbox</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className='mx-4'><Link style={{textDecoration:'none'}}onClick={handleUnread}>Unread </Link><Badge bg="dark">{getReadUnreadCount().unread}</Badge></li>
                      <li className='mx-4'><Link style={{textDecoration:'none'}}onClick={handleRead}>Read </Link><Badge bg="dark">{getReadUnreadCount().read}</Badge></li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={9}>
              <Container>
                <Accordion>
                  {GetAllEnquiries()}
                </Accordion>
              </Container>
            </Col>
          </Row>
        </Container>
        }
    </div>
  )
}

export default Contact
