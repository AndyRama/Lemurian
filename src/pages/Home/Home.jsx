import React from 'react'
import Header from '../../components/Header/Header'
import Tabs from '../../components/Tabs/Tabs'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <Header />

      {/* Expertise */}
      <section className="blocText">
        <div className="container">
          <h2 className="blocText__title">Mon Expertise</h2>
          <p className="blocText__text">
            Je réalise depuis 3 ans des outils sur-mesure à destination
            d'entreprises de petite taille. Je transforme chaque besoin de mes
            clients en solution web, en garantissant le respect de leurs règles
            métiers.
          </p>
        </div>
      </section>

      {/* Développement[mobile] */}
      <section className="blocText">
        <div className="container">
          <Tabs />
          <h2 className="blocText__title">Developpement</h2>
          <p className="blocText__text">
            Chez Lemurian Agency, j'ai une passion pour les passions !
          </p>

          {/* Composant featured */}
        </div>
      </section>

      {/* Confiance */}
      <section className="blocText">
        <div className="container">
          <h2 className="blocText__title">Ils m'ont fait confiance</h2>
          <p className="blocText__text">
            Nous réalisons au quotidien des projets pour des startups et des
            petites PME.
          </p>
        </div>
      </section>

      {/* Artisans */}
      <section className="blocText">
        <div className="container">
          <h2 className="blocText__title">
            Un <span className="green">artisan</span> du web
          </h2>
          <p className="blocText__text">
            Chacun des projets que nous réalisons est unique, alors nous
            travaillons en étroite collaboration avec notre client. De manière
            itérative, nous implémentons des fonctionnalités et le client nous
            fait un retour sur celles-ci. En plus des traditionnels e-mails, des
            appels téléphoniques, des réunions visio, nous avons mis en place :
          </p>

          <ul className="blocText__text">
            <li className="blocText__text__subtext">
              Un dépôt de code source Git administré à l’aide de Gitlab.
            </li>
            <br />
            <li className="blocText__text__subtext">
              Un système de tickets / commentaires pour interagir avec l'équipe.
            </li>
            <br />
            <li className="blocText__text__subtext">
              Un environnement de développement, sur lequel travaillent nos
              développeurs, et testent leurs modifications avant de les
              présenter.
            </li>
            <br />
            <li className="blocText__text__subtext">
              Un environnement bac à sable, pour que notre client puisse tester
              les fonctionnalités de l'application sans risque et nous faire un
              retour.
            </li>
            <br />
            <li className="blocText__text__subtext">
              Un environnement de pré-production, pour tester une dernière fois
              l'intégralité de l'application, avec des données réelles.
            </li>
            <br />
            <li className="blocText__text__subtext">
              Un environnement de production, stable et immaculé, pour
              accueillir votre outil dans sa version finale.
            </li>
            <br />
          </ul>
        </div>
      </section>

      {/* Projets */}
      <section className="blocText">
        <div className="container">
          <h2 className="blocText__title">Les projets</h2>
          <p className="blocText__text">
            Je réalise des applications web sur-mesure, destinées à optimiser le
            quotidien de nos clients. Le gain de temps, l'efficacité et la
            personnalisation sont les maîtres mots !.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
