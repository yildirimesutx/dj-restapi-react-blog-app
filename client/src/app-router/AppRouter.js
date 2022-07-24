import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NewPost from '../pages/NewPost'
import  Detail  from '../pages/Detail'

const AppRouter = () => {

  return (
   <Router>
       <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path='/newpost'  element={<NewPost/>}/>
           <Route path='/detail'  element={<Detail/>}/>
        </Routes>
   </Router>
        
     
    
    
    

  )
}

export default AppRouter