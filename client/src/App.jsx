import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Dashboard from '../pages/student/Dashboard'
import Cources from '../pages/student/Cources'
import Progress from '../pages/student/Progress'

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
      </Routes>
    </div>
  )
}

export default App