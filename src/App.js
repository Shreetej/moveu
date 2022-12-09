import './App.css';
import Home from './components/Routes/home';
import About from './components/Routes/about';
import Contact from './components/Routes/contact';
import DigProg from './components/Routes/digProg';
import FacilityMgt from './components/Routes/facilityMgt';
import Login from './components/Routes/login';
import HumanEngagement from './components/Routes/humanEngagement';
import Blog from './components/Routes/blog';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Router>
        <Main/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/humanEngagement' element={<HumanEngagement/>}/>
          <Route path='/facilityMgt' element={<FacilityMgt/>}/>
          <Route path='/digProg' element={<DigProg/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
