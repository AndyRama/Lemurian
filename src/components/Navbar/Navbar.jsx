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

      <div className="d-none d-md-block">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-lemurian-item navbar-lemurian-link">
            Home
          </Link>
          <Link to="/" className="navbar-lemurian-item navbar-lemurian-link">
            Expertise
          </Link>
          <Link
            to="/expertise"
            className="navbar-lemurian-item navbar-lemurian-link"
          >
            Méthodologie
          </Link>
          <Link
            to="/Méthodologie"
            className="navbar-lemurian-item navbar-lemurian-link"
          >
            Projet
          </Link>

          {userSignedIn ? (
            <Link
              to="/logout"
              className="navbar-lemurian-item navbar-lemurian-link"
            >
              Se déconnecter
            </Link>
          ) : (
            <Link
              to="/login"
              className="navbar-lemurian-item navbar-lemurian-link"
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>

      <div className="d-block d-md-none">
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

                <Link to="/" className="navbar-link">
                  Expertise
                </Link>

                <Link to="/" className="navbar-link">
                  Méthodologie
                </Link>

                <Link to="/" className="navbar-link">
                  Projets
                </Link>

                <Link to="/" className="navbar-link">
                  Contact
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
