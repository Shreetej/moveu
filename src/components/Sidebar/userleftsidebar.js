import {Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from 'react'
import { Form } from "react-bootstrap";

const Userleftsidebar = () => {
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
                    <MenuItem>Fashion</MenuItem>
                    <MenuItem>Travel</MenuItem>
                    <MenuItem>Food</MenuItem>
                    <MenuItem>Photography</MenuItem>
                </SubMenu>
                <SubMenu label="Most Popular articles">
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default Userleftsidebar;
