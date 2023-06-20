import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Expertise from '../pages/Expertise/Expertise'
import Methodologie from '../pages/Methodologie/Methodologie'
import Projets from '../pages/Projets/Projets'
import Profile from '../pages/Profile/Profile'
import Contact from '../pages/Contact/Contact'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/Methodologie" element={<Methodologie />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
