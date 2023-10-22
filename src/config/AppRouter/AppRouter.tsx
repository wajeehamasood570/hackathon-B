
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../../screens/Home/Home'
import Login from '../../screens/Login/Login'
import SignUp from '../../screens/SignUp/SignUp'
import Protected from '../../screens/Protected'
import DonorAcceptor from '../../screens/DonorAcceptor/DonorAcceptor'
import Donor from '../../screens/DonorAcceptor/Donor'
import Acceptor from '../../screens/DonorAcceptor/Acceptor'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/donoracceptor/*" element={<Protected Screen={DonorAcceptor} />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="acceptor" element={<Acceptor />} />
        </Routes>
      
      </Router>
    </>
  )
}

export default AppRouter