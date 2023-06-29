import React, { Link } from 'react-router-dom'
import Header from './../../components/Header/Header'
import BlocText from '../../components/BlocText/BlocText'
import './Home.scss'

function Home() {
  const content = [
    {
      title: 'Les projets',
      text: "Je réalise Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
    },
  ]

  return (
    <section>
      <Header />
      <BlocText />
      <div>
        <ul class="list-inline tabs-underlined">
          <li>
            <Link to="/Expertise" class="tab-underlined active">
              Développement
            </Link>
          </li>
          <li>
            <Link to="/Expertise" class="tab-underlined">
              Hébergement
            </Link>
          </li>
          <li>
            <Link to="/Expertise" class="tab-underlined">
              Maintenance
            </Link>
          </li>
        </ul>
      </div>
      <div className="blocText">
        <h2 className="blocText__title">{content.title}</h2>
        <p className="blocText__text">{content.text}</p>
        <button className="contact">
          <Link to="/contact" className="contact__text">
            Discutons-en !
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Home
