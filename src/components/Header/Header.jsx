import React from 'react'
import desktop from './../../assets/desktop.jpg'
import './Header.scss'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <section className="header">
      <div className="container__left">
        <h1 className="container__left__title">
          Création <span className="container__left__title__green--not">&</span>
          <br /> Développement web <br /> par{' '}
          <span className="container__left__title__green">Lemurian Agency</span>
        </h1>
        <p className="container__left__text">
          Lemurian est une agence de développement web basée à Bordeaux (Nouvelle Aquitaine, 33).
          Je réalise tous types de <span> logiciels</span> et d'<span>applications</span> sur mesure
          en nous basant sur des technologies web modernes. Je me <span> spécialisé</span> sur le langage
          JavaScript et plus particulièrement sur <span>ReactJS</span> et NodeJS.
        </p>
        <button className="contact">
          <Link to="/Contact" className="contact__text">
           Contact
          </Link>   
        </button>
      </div>

      <div className="container__right">
        <img
          className="container__Right__img"
          src={desktop}
          alt="Lemurian Agency desktop"
        />
      </div>
    </section>
  )
}

export default Header
