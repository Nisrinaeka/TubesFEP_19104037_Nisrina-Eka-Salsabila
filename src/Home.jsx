import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="#">
            <span>
              Nisrina
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/katalog' className='nav-link'>Katalog</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className='nav-link'>About</Link>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className=" slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Hallo <br />
                            saya Nisrina Eka Salsabila
                          </h1>
                          <p>
                            Berikut website yang menampilkan daftar-daftar nama pahlawan
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt="" className />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Hallo <br />
                            saya Nisrina Eka Salsabila
                          </h1>
                          <p>
                          Berikut website yang menampilkan daftar-daftar nama pahlawan
                          </p>
                          <div className="d-flex">
                            <a href className="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href className="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt="" className />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            Hallo <br />
                            saya Nisrins Eka Salsabila
                          </h1>
                          <p>
                          Berikut website yang menampilkan daftar-daftar nama pahlawan
                          </p>
                          <div className="d-flex">
                            <a href className="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href className="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end slider section */}
  </div>
  
  )
}
