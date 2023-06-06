import React from 'react'
import './Navbar.scss'
import logo from './../../assets/lemurian.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div className="navbar header-p">
        <a className="navbar-brand" href="https://www.lemurian-agency.fr">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Lemurian Agency"
                id="nav-logo"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="navbar-2 header-p">
        <button className="toggle-menu z-index-front">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div id="menu" className="">
        <nav className="main-nav">
          <ul>
            <li>
              <a href="https://www.lemurian-Agency.fr"> Accueil</a>
            </li>
            <li>
              <a href="https://www.lemurian-Agency.fr/expertise"> Expertise</a>
            </li>
            <li>
              <a href="https://www.lemurian-Agency.fr/methodologie">
                Méthodologie
              </a>
            </li>
            <li>
              <a href="https://www.lemurian-Agency.fr/clients"> Clients</a>
            </li>
            <li>
              <a href="https://www.lemurian-Agency.fr/equipe"> Profile</a>
            </li>
            <li>
              <a href="https://www.lemurian-Agency.fr/contact"> Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default NavBar
