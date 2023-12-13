




import React from "react";
import Slider from "react-slick";
import Logo1 from './Image/logo1.jpg'
import Logo2 from './Image/logo2.jpg'
import Logo3 from './Image/logo3.jpg'
import Logo4 from './Image/logo4.jpg'
import Logo5 from './Image/logo5.jpg'
import Logo6 from './Image/logo6.jpg'
import Logo7 from './Image/logo7.jpg'
import Logo8 from './Image/logo8.jpg'
import './App.css'
const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    
    <div className="bg-light companycontent">
   
   <div className='container'>
    <div className='row '>
         <h3 className='fw-bold'>Our trusted partners</h3>
    </div>
     <div className='row'>
         <p>
 Winning collaborations that produce winning designs.</p>
     </div>
   </div>
      <Slider {...settings}>
        <div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo1} className="img-fluid "/>
         </div>
        </div>
        <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo2} className="img-fluid "/>
         </div>
        <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo3} className="img-fluid"/>
         </div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo4} className="img-fluid "/>
         </div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo5} className="img-fluid "/>
         </div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo6} className="img-fluid "/>
         </div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo7} className="img-fluid "/>
         </div>
         <div className="col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12 col-lg-12">
            <img src={Logo8} className="img-fluid "/>
         </div>
      </Slider>
    </div>
 
 );
};

export default AutoPlay;
