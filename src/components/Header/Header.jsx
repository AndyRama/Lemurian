import React from 'react'
import desktop from './../../assets/desktop.jpg'
import IconArrow from '../Icons/arrow'
import './Header.scss'

function Header() {
  return (
    <header className="mb-5">
      <div className="row m-0">
        <div className="col-12 col-xl-7">
          <div className="row justify-content-center p-4">
            <div className="col-0 col-xl-2"></div>
            <div className="col-12 col-xl-8 margin-top-5">
              <h1>
                Notre <span className="green">Expertise</span>
              </h1>
              <p className="lead mt-3 mb-2">
                Lemurian Agency développe des outils sur-mesure à destination
                des entreprises. Je fait un sorte de faire gagner du temps et de
                l'efficacité à nos clients en numérisant leurs processus, dans
                le respect de leurs règles métiers.
              </p>
              <div className="col-12 mt-5">
                <a href="#main">
                  <div className="ico animated">
                    <div className="circle circle-top"></div>
                    <div className="circle circle-main"></div>
                    <div className="circle circle-bottom"></div>
                    <IconArrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-0 col-xl-5">
          <img
            className="img img-header div-img"
            src={desktop}
            alt="Lemurian Agency"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
