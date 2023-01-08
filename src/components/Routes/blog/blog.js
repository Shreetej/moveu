import {React,useEffect,useState }from 'react'
import { GetBlog } from '../../services/user-service';
import { Card,Row, Col, Container } from 'react-bootstrap';
import Userleftsidebar from '../../Sidebar/userleftsidebar';
import ElderlyImage from '../../../images/blog/mountainyoga.jpg'

const Blog = () => {

  const [posts, setposts] = useState('');

  function getAge(date){
    let currentDate = new Date()
    let age = currentDate - new Date(date)
    console.log(age)
    return new Date(age).getDay()
  }

  useEffect(() => {
    async function fetchblog(){
      const AllPosts = await GetBlog()
      setposts(AllPosts);
    }
    return () => {
      fetchblog()
    }
  }, [])

  const getPosts=()=>{
    if(posts.length>0){
       return posts.map(post => 
        <Card key={post.id} className='m-3 shadow-lg text-center' md={3} style={{maxWidth:'70vw'}}>
          <Card.Body>
              <Card.Header style={{backgroundColor:'#302c2c',color:'white'}}>{post.title}</Card.Header>
              <Card.Img variant='top' src={post.imageLocation}/>
              <Card.Title className='mt-2'>{post.subTitle}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <Card.Footer className="d-flex text-muted" style={{justifyContent:'space-between'}}><div>{new Date(post.dateOfPost).toDateString()}{getAge(post.dateOfPost)}</div><div>{post.category}</div></Card.Footer>
          </Card.Body>
        </Card>
      );
    }else{
         return <>No Posts to Display</>
    }
      
  }
  
  return (
    <div>
        {/* <div className='' style={{backgroundImage:`url(${ElderlyImage})`,height:'60vh',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}>*/}
        <div>
          <img src={ElderlyImage} style={{width:'100%',maxHeight:'60vh'}} alt='Loading failed'></img>
        </div>
        <Row>
          <Col xs={9}><Container>{getPosts()}</Container></Col>
          <Col xs={3}><Container><Userleftsidebar/></Container></Col>
        </Row>
    </div>
  )
}

export default Blog
