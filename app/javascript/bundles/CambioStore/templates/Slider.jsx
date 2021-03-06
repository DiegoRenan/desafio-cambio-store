import React from 'react'

import Slide1 from '../images/slide-1.png'
import Slide2 from '../images/slide-2.png'

export default props => (

  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={Slide1} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

)

