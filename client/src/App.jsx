import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Dashboard from '../pages/student/Dashboard'
import Cources from '../pages/student/Cources'
import Progress from '../pages/student/Progress'
import Userteacher from '../pages/teacher/Userteacher'
import Teachercources from '../pages/teacher/Teachercources'
import Teacherprogress from '../pages/teacher/Teacherprogress'
import Addcources from '../pages/teacher/Addcources'
import Addlesson from '../pages/teacher/Addlesson'
import RealCources from '../pages/RealCources'
import About from '../pages/About'

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cources' element={<Cources />}/>
        <Route path='/progress' element={<Progress />}/>
        <Route path='/userteacher' element={<Userteacher />}/>
        <Route path='/teachercources' element={<Teachercources />}/>
        <Route path='/teacherprogress' element={<Teacherprogress />}/>
        <Route path='/addcources' element={<Addcources />}/>
        <Route path='/addlesson' element={<Addlesson />}/>
        <Route path='/realcources' element={<RealCources />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App