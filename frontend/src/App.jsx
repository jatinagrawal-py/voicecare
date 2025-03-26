import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Ai from './pages/Ai'
import Form from './pages/Form'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import Logout from './pages/Logout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/voicecare-login' element={<Login/>} />
      <Route path='/voicecare-signup' element={<Signup/>} />
      <Route path='/voicecare-ai' element={<UserProtectedWrapper><Ai/></UserProtectedWrapper>} />
      <Route path='/voicecare-form' element={<UserProtectedWrapper><Form/></UserProtectedWrapper>} />
      <Route path='/voicecare-logout' element={<UserProtectedWrapper><Logout/></UserProtectedWrapper>} />
    </Routes>
  )
}

export default App