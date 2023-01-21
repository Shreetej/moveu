import {Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {React} from 'react'
import { Form } from "react-bootstrap";

const Userleftsidebar = (props) => {

  const Category = ()=>{
    return props.post.map((e)=>
      <MenuItem key={e._id}>{e.category}</MenuItem>
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
                  {/* console.log(post) */}
                  {/* {props.post.map((post)=><MenuItem key={post._id}>{post.category}</MenuItem>)}; */}
                  <Category/>
                </SubMenu>
                <SubMenu label="Most Popular articles">
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default Userleftsidebar;
