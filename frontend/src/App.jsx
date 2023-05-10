import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import  {FacultyBio}  from "./pages/FacultyBio/Facultybio";
import  {Gallery}  from "./pages/FacultyBio/Gallery";
import  {Download}  from "./pages/Courses/Download";
import Achievements from "./pages/Achievementspage";
import Signup from './pages/Register/Signup'
import Login from "./pages/Register/Login"
import  {NewsEvent}  from "./pages/News/NewsEvent";
import  {Courses}  from "./pages/Courses/Courses";
import  {YearTwoCourse}  from "./pages/Courses/YearTwoCourses";
import  {Nuesa}  from "./pages/News/Nuesa";
import  {Staff}  from "./pages/Staff/Staff";
import { FEG } from "./pages/Courses/FEG201";
import { Setting } from "./pages/Setting/setting";
import Achievementsscreen from "./pages/Achievements/Achievementsscreen";
import Aboutpresident from "./Homepage/Aboutpresident/Aboutpresident";
import AllPosts from "./posts/AllPosts";
import OnePost from "./posts/OnePost";
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/facultybio" element={<FacultyBio/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/newsevent" element={<NewsEvent/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/yeartwo" element={<YearTwoCourse/>} />
          <Route path="/achievement" element={<Achievements/>} />
          <Route path="/achievement/:id" element={<Achievementsscreen/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/nuesa" element={<Nuesa/>} />
          <Route path="/allStaff" element={<Staff/>} />
         <Route path="/feg" element={<FEG/>} />
         <Route path="/settings" element={<Setting/>} />
         <Route path="/register" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/aboutpresident" element={<Aboutpresident/>} />
         <Route path="/posts" element={<AllPosts/>} />
         <Route path="/post/:slug" element={<OnePost/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
