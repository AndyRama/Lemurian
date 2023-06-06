import React from 'react'
import desktop from './../../assets/desktop.jpg'

function Header() {
  return (
    <header className="mb-5">
      <div className="row m-0">
        <div className="col-12 col-xl-7">
          <div className="row justify-content-center p-4">
            <div className="col-0 col-xl-2"></div>
            <div className="col-12 col-xl-8 margin-top-5">
              <h1>
                Notre <span className="blue">Expertise</span>
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
                    <svg
                      className="svg"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 612 612"
                      style={{ enableBackground: 'new 0 0 612 612' }}
                      xmlSpace="preserve"
                    >
                      <defs>
                        <clipPath id="cut-off-arrow">
                          <circle cx="306" cy="306" r="287"></circle>
                        </clipPath>
                        <filter id="goo">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                      </defs>
                      <path
                        className="st-arrow"
                        d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
                    l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
                    c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
                    c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-0 col-xl-5">
          {/* <div> */}
          <img
            className="img img-header div-img"
            src={desktop}
            alt="Lemurian Agency"
          />
          {/* </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
