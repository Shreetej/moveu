import { React, useState, useEffect, useContext, useRef } from 'react'
import { Card, Row, Col, Container, Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import ElderlyImage from '../../../images/blog/wphealthyquote.jpg'
import postContext from '../../../context/posts/postContext';
import AddPost from './addPost';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
import userContext from '../../../context/posts/UserContext';
import { addImage } from '../../services/user-service';
import { BASE_URL } from '../../services/helper';
import Sidebar from '../../Sidebar/sidebar';


const Blog = () => {

  const context = useContext(postContext);
  const { posts, getPosts, editPost, deletePost, setposts} = context;
  //Checking if logged in
  const usercontext = useContext(userContext);
  const { user } = usercontext;

  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    console.log(files.files)
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
  }, [])
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    GetAllPosts()
  },[posts])

  const GetAllPosts = () => {
    if (posts.length > 0) {
      return posts.map(post =>
        <Card key={post.id} className='m-3 shadow-lg' md={3}>
          <Card.Body>
            {user !== null && <div className='d-flex justify-content-end'>
              <FaEdit className='m-2' size={20} onClick={() => handleEditPost(post)} />
              <FaTrashAlt className='m-2' size={20} onClick={() => deletePost(post._id)} />
            </div>}
            <Card.Header style={{ backgroundColor: '#302c2c', color: 'white' }}>{post.title}</Card.Header>
            {post.image_location !== '' && <Card.Img variant='top' src={BASE_URL+'/posts/upload/' + post.image_location} />}
            <Card.Title className='mt-2'>{post.subTitle}</Card.Title>
            <Card.Text style={{ 'whiteSpace': 'pre-wrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>{post.content}</Card.Text>
            <Card.Footer className="d-flex text-muted" style={{ justifyContent: 'space-between' }}><div>{getAge(post.published_date)}</div>
            <div>#{post.category}</div>
            <div>{post.publisher}</div>
            </Card.Footer>
          </Card.Body>
        </Card>
      );
    } else {
      return <>No Posts to Display</>
    }
  }

  return (
    <div>
      {/* <div className='' style={{backgroundImage:`url(${ElderlyImage})`,height:'70vh',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}> </div>*/}
      <div>
        <img src={ElderlyImage} style={{ width: '100%', maxHeight: '70vh' }} alt='Loading failed'></img>
      </div>
      <Row>
        <Col xs={9}>
          {user !== null && <AddPost />}
          {/*Edit Post*/}
                    <Container fluid><GetAllPosts/></Container>
        </Col>
        <Col xs={3}>
          <Container>
            <Sidebar posts={posts} setposts={setposts}/>
            {/* <Userleftsidebar /> */}
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Blog
