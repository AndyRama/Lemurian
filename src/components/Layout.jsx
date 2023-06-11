import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
// import Expertise from '../pages/Expertise/Expertise'
// import Méthodologie from '../pages/Méthodologie/Méthodologie'
// import Clients from '../pages/Clients/Clients'
// import Profile from '../pages/Profile/Profile'
// import Contact from '../pages/Contact/Contact'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Expertise" element={<Expertise />} />
        <Route path="/Méthodologie" element={<Méthodologie />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
