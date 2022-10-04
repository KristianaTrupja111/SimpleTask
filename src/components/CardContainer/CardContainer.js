import React from 'react'
import "./CardContainer.scss";
import logo from "../Asset/companyLogo.jpeg"
import logo1 from "../Asset/quotes.PNG"
import logo2 from "../Asset/Capture.PNG"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardContainer = () => {
  const settings = {
   arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
     
    ]
  } 

  return (
    
    <div className="stripes-background">
  <img src={logo1} className="quotes"/>
  <img src={logo2} className="stripe-bottom"/>
   
    <div className="description-container">
      <h3 className="d-title">Lorem ipsum dolor sit amet</h3>
      <p className="d-description">
        Donec pede justo, fringlla vel, aqualet nec, vulputate eget, ercu, in
        enim justo, rhoncus ut,imperdiet a, venenatis, vita, justo
      </p>
    </div>

   
       <Slider {...settings}>
          <div>
          <div className="card">
        <img
          src={logo} className="logo"
        />
        <img
          src={logo1} className="quotes"
        />
        <p className="description">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
          ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem
          ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit
          amet,
        
        </p>
        <p className="author">Max Musterman</p>
        <p className="address">Anean vulpate (AB), Maecanas</p>
      </div>
          </div>
          <div>
          <div className="card">
        <img
          src={logo} className="logo"
        />
        <img
          src={logo1} className="quotes"
        />
        <p className="description">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
          ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem
          ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit
          amet,
        
        </p>
        <p className="author">Max Musterman</p>
        <p className="address">Anean vulpate (AB), Maecanas</p>
      </div>
          </div>
          <div>
          <div className="card">
        <img
          src={logo} className="logo"
        />
        <img
          src={logo1} className="quotes"
        />
        <p className="description">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
          ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem
          ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit
          amet,
        
        </p>
        <p className="author">Max Musterman</p>
        <p className="address">Anean vulpate (AB), Maecanas</p>
      </div>
          </div>
  
        </Slider>
    <div className="inner-content">
      <h3>Lorem ipsum dolor sit amet</h3>
      <button>Lorem ipsum</button>
    </div>
  </div>
    
  )
}

export default CardContainer