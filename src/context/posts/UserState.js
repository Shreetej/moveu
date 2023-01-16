import {React,useState} from 'react'
import UserContext from './UserContext';

const UserState = (props) => {

  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{user,setuser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState;