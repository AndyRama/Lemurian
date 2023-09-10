import React from 'react'
import './BlocText.scss'
import { Link } from 'react-router-dom'

function BlocText() {
  const content = [
    {
      title: 'Mon Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
      link: 'Expertise',
    },
    {
      title: "Ils m'ont fait confiance",
      text: 'Nous réalisons au quotidien des projets pour des startups et des petites PME.',
    },
    {
      title: 'Les projets',
      text: "Je réalise des applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
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
    </div>
  )
}

export default BlocText
