import React from 'react'
import './BlocText.scss'
import { Link } from 'react-router-dom'

function BlocText() {
  const content = [
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
