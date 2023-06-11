import React from 'react'
import './BlocText.scss'

function BlocText() {
  const content = [
    {
      title: 'Des compétences pluridisciplinaire',
      text: '  Ma force se trouve  diversité ! Issue de formations diverses, avec des expériences variées, lemurian rassemble des talents qui      interviennent à toutes les étapes du développement de votre projet.',
    },
    {
      title: 'Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
  ]
  return (
    <section className="blocText">
      <div className="blocText__Left">
        <h3 className="blocText__title">{content[0].title} </h3>
        <p className="blocText__text">{content[0].text}</p>
      </div>
      <div className="blocText__Right">
        <h3 className="blocText__title">{content[1].title} </h3>
        <p className="blocText__text">{content[1].text}</p>
      </div>
    </section>
  )
}

export default BlocText
