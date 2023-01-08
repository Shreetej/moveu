import React, { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import Userleftsidebar from '../Sidebar/userleftsidebar';

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>      
      <Userleftsidebar/>  
    </div>
  )
}

export default UserDashboard