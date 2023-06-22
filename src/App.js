import './App.css';
import { React, useState } from 'react';
import Home from './components/Routes/home/home';
import About from './components/Routes/about';
import Contact from './components/Routes/contact/contact';
import DigProg from './components/Routes/services/digProg';
import FacilityMgt from './components/Routes/services/facilityMgt';
import Login from './components/Routes/login';
import HumanResources from './components/Routes/services/humanResources';
import Blog from './components/Routes/blog/blog';
import Posts from './components/Routes/user/Blog';
import User from './components/Routes/user/User';
import Password from './components/Routes/user/Password';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserDashboard from './components/Routes/user/userDashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import PostState from './context/posts/postState';
import UserState from './context/posts/UserState';

function App() {

  window.onbeforeunload = function (e) {
    window.onunload = function () {
      // window.localStorage.isMySessionActive='false';
      //logout();
    }
    return undefined;
  }

  window.onload = function () {
    window.localStorage.isMySessionActive = 'true';
  }

  return (
    <div className="App">
      {/* <Navigation/> */}
      <UserState>
        <PostState>
          <Router>
            <Main />
            <ToastContainer position='top-center' />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/humanResources' element={<HumanResources />} />
              <Route path='/facilityMgt' element={<FacilityMgt />} />
              <Route path='/digProg' element={<DigProg />} />
              <Route path='/user' element={<PrivateRoute />}>
                <Route path='dashboard' element={<UserDashboard />}>
                  <Route index element={<Posts/>}/>
                  <Route path='/user/dashboard/users' element={<User />} />
                  <Route path='/user/dashboard/posts' element={<Posts />} />
                  <Route path='/user/dashboard/password' element={<Password />} />
                </Route>
              </Route>
            </Routes>
            <Footer/>
          </Router>
        </PostState>
      </UserState>
    </div>
  );
}

export default App;