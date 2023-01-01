import './App.css';
import Home from './components/Routes/home/home';
import About from './components/Routes/about';
import Contact from './components/Routes/contact';
import DigProg from './components/Routes/digProg';
import FacilityMgt from './components/Routes/facilityMgt';
import Login from './components/Routes/login';
import HumanEngagement from './components/Routes/humanEngagement';
import Blog from './components/Routes/blog/blog';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserDashboard from './components/Routes/userDashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import { logout } from './components/services/user-service';

function App() {

  window.onbeforeunload = function(e){
    window.onunload =  function(){
      window.localStorage.isMySessionActive='false';
      logout();
    }
    return undefined;
  }

  window.onload = function(){
    window.localStorage.isMySessionActive='true';
  }

  return (
    <div className="App">
      {/* <Navigation/> */}
      <Router>
        <Main/>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/humanEngagement' element={<HumanEngagement/>}/>
          <Route path='/facilityMgt' element={<FacilityMgt/>}/>
          <Route path='/digProg' element={<DigProg/>}/>
          <Route path='/user' element={<PrivateRoute/>}>
            <Route path='dashboard' element={<UserDashboard/>}/>
          </Route>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
