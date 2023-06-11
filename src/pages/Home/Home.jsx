import './Home.scss'
import Header from './../../components/Header/Header'
import BlocText from '../../components/BlocText/BlocText'

function Home() {
  const content = [
    {
      title: 'Expertise',
      text: "Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
    },
    {
      title: 'Ils nous font confiance',
      text: 'Nous réalisons au quotidien des projets pour des startups et des petites PME.',
    },
    {
      title: 'Les projets',
      text: "Je réalise Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients. Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
    },
    {
      title: 'Vous souhaitez en savoir plus ?',
      text: "Que ce soit pour une question, une demande de devis, une remarque ou une candidature : n'hésitez pas à nous contacter via notre formulaire de contact. On se fera un plaisir de revenir vers vous pour en discuter ensemble.",
    },
  ]

  return (
    <section>
      <Header />
      <section className="blocText">
        <h2 className="blocText__title">{content[0].title} </h2>
        <p className="blocText__text">{content[0].text}</p>
      </section>
      <div className="containner">
        {/* COMPOMPOSENT DEVELOPPEMENT */}
        <section className="blocText">
          <h2 className="blocText__title">{content[1].title} </h2>
          <p className="blocText__text">{content[1].text}</p>
        </section>
        {/* COMPOMPOSENT CONFIANCE */}
        <section className="blocText">
          <h2 className="blocText__title">{content[2].title} </h2>
          <p className="blocText__text">{content[2].text}</p>
          <button>Discutons-en !</button>
        </section>
        {/* COMPOMPOSENT ARTISANS */}
        {/* COMPOMPOSENT QUI JE SUIS ! */}
        <BlocText />
        {/* COMPOMPOSENT PROJECT */}
        {/* COMPOMPOSENT SAVOIR + */}
        <section className="blocText">
          <h2 className="blocText__title">{content[3].title} </h2>
          <p className="blocText__text">{content[3].text}</p>
          <button>Discutons-en !</button>
        </section>
      </div>
    </section>
  )
}

export default Home
