import React from 'react'
import './Navbar.scss'
import logo from './../../assets/lemurian.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const userSignedIn = false // Remplacez cette valeur par votre logique de connexion utilisateur

  return (
    <div className="navbar-lemurian">
      <Link to="/" className="navbar-lemurian-brand">
        <img src={logo} alt="Logo" />
        <h2 className="avatar">Lemurian Agency</h2>
      </Link>

      <div className="d-md-block">
        <div className="navbar-dropdown">
          <input id="toggle" type="checkbox" />
          <label className="hamburger" htmlFor="toggle">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>
          <div className="nav">
            <div className="nav-wrapper">
              <nav className="d-flex flex-column">
                <Link to="/" className="navbar-link">
                  Home
                </Link>

                <Link to="/Expertise" className="navbar-link">
                  Expertise
                </Link>

                <Link to="/Methodologie" className="navbar-link">
                  Méthodologie
                </Link>

                <Link to="/projets" className="navbar-link">
                  Projets
                </Link>

                <Link to="/Contact" className="navbar-link">
                  Contact
                </Link>

                <Link to="/Profile" className="navbar-link">
                  Profile
                </Link>

                {userSignedIn ? (
                  <Link to="/logout" className="navbar-link">
                    Se déconnecter
                  </Link>
                ) : (
                  <>
                    <Link to="/register" className="navbar-link">
                      Créer un compte
                    </Link>
                    <Link to="/login" className="navbar-link">
                      Se connecter
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
