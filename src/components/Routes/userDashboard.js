import React, { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import Userleftsidebar from '../Sidebar/userleftsidebar';

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const Leftbar=()=>{
    return(<h1>Users</h1>) 
  }

  return (
    <div>
      UserDashboard
      <Leftbar/> 
    </div>
  )
}

export default UserDashboard