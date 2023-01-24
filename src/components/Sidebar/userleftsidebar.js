import {Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {React,useContext} from 'react'
import { Button, Form } from "react-bootstrap";
import postContext from '../../context/posts/postContext';

const Userleftsidebar = () => {

  const context = useContext(postContext);
  const { posts,setposts } = context;

  const handleArchiveYear=(publishYear)=>{
    console.log("In handle Publish Year")
    let newlist =  posts.filter((e)=>e.publish_date.getFullYear()===publishYear)
    console.log(newlist)
    setposts(newlist)
  }

  const handleCategories=(category)=>{
    console.log("In handle Categories")
    let newlist = posts.filter((e)=>e.category===category)
    console.log(newlist)
    setposts(newlist)
  }

  const Category = ()=>{
    return posts.map((e)=>
      <Button onClick={()=>handleCategories(e.category)}>{e.category}</Button>
    )
  }

  const Archives = ()=>{
    return posts.map((e)=>
      <MenuItem key={e._id} onClick={()=>handleArchiveYear(e.publish_date)}>{e.publish_date}</MenuItem>
    )
  }
  //  console.log(props.post.map((e)=>e.category))
  return (
    <div>        
        <Sidebar className="mt-3">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type a keyword & hit enter"
              className="m-2"
              aria-label="Search"
            />
        </Form>
            <Menu>
                <SubMenu label="Categories">
                  <Category/>
                </SubMenu>
                <SubMenu label="Most Popular articles">
                </SubMenu>
                <SubMenu label="Archives">
                  <Archives/>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default Userleftsidebar;
