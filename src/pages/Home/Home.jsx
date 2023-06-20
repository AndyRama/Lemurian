import React from 'react'
import Header from './../../components/Header/Header'
// import BlocText from '../../components/BlocText/BlocText'
import './Home.scss'


function Home() {
  return (
    <section>
      <Header />
      {/* <BlocText/>     */}
      <h2>Notre Expertise</h2>
      <p >Je réalise depuis 3 ans des outils sur-mesure à destination d'entreprises de petite taille. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.</p>
    </section>
  );
};

export default Home;
