import React from 'react'
import './BlocText.scss'

function BlocText() {
  const content = [
    {
      title: 'Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
    {
      title: 'Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
  ]
  return (
    <section className="blocText">
      <h2 className="blocText__title">{content[0].title} </h2>
      <p className="blocText__text">{content[0].text}</p>
    </section>
  )
}

export default BlocText
