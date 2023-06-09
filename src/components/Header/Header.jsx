import React from 'react'
import desktop from './../../assets/desktop.jpg'
import './Header.scss'

function Header() {
  //   return (
  //     <div className="row m-0">
  //       <div className="col-12 col-xl-5 mt-4">
  //         <div className="row justify-content-center p-4 ">
  //           <div className="col-0 col-xl-2"></div>
  //           <div className="col-12 col-xl-8 pt-4 ">
  //             <h1 className="main-title">
  //               Création <span className="green">&</span>
  //               <br /> Développement web <br /> par{' '}
  //               <span className="green">Lemurian Agency</span>
  //             </h1>
  //             <p className="lead mt-2 mb-3 content">
  //               Lemurian Agency développe des outils sur-mesure à destination des
  //               entreprises. Je fais un sorte de faire gagner du temps et de
  //               l'efficacité à mes clients en numérisant leurs processus, dans le
  //               respect de leurs règles métiers.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-0 col-xl-5">
  //         <img className="img-header" src={desktop} alt="Lemurian Agency" />
  //       </div>
  //     </div>
  //   )

  return (
    <section className="header">
      <div className="container__left">
        <h1 className="container__left__title">
          Création <span className="green">&</span>
          <br /> Développement web <br /> par{' '}
          <span className="green">Lemurian Agency</span>
        </h1>
        <p className="container__left__text">
          Lemurian Agency développe des outils sur-mesure à destination des
          entreprises. Je fais un sorte de faire gagner du temps et de
          l'efficacité à mes clients en numérisant leurs processus, dans le
          respect de leurs règles métiers.
        </p>
      </div>
      <div className="container__right">
        <img
          className="container__Right__img"
          src={desktop}
          alt="Lemurian Agency"
        />
      </div>
    </section>
  )
}

export default Header
