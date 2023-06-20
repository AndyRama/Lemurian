import React from 'react'
import './BlocText.scss'
import { Link } from 'react-router-dom'

function BlocText() {

  const content = [
    {
      title: 'Mon Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
    {
      title: "Ils m'ont fait confiance",
      text: "Nous réalisons au quotidien des projets pour des startups et des petites PME.",
    },
    {
      title: 'Les projets',
      text: "Je réalise Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
    },
    {
      title: 'Vous souhaitez en savoir plus ?',
      text: "Que ce soit pour une question, une demande de devis, une remarque : n'hésitez pas à nous contacter via notre formulaire de contact. Je me ferai un plaisir de revenir vers vous pour en discuter ensemble.",
    },
  ]

  return (
    <div className="col-8">
      {content.map((item, index) => (
        <section key={index} className="blocText">
          <h2 className="blocText__title">{item.title}</h2>
          <p className="blocText__text">{item.text}</p>
        </section>
        ))}

      <section className="blocText">
        <h2 className="blocText__title">{content[3].title}</h2>
        <p className="blocText__text">{content[3].text}</p>
        <button className="contact">
          <Link to="/Contact" className="contact__text">
            Discutons-en !
          </Link>
        </button>
      </section>
    </div>
  )
}

export default BlocText
