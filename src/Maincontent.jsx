

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from './Image/sofa.jpg'
import Image2 from "./Image/2-living-1657197413-4xxLw.jpg";
import Image3 from './Image/5-bedroom-1657197407-4Dq7t.jpg'
import Image4 from './Image/6-modular-kitchen-1657197411-Ct2fB.jpg'
import Image5 from './Image/5-bedroom-1657197407-4Dq7t.jpg'


const Maincontent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };





  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <h2>Homes for every style</h2>
        </div>
        <div className="row">
          <div className="d-flex-md-justify-content-between">
            <p>Superior finishes, trendy designs and quality modules at affordable prices.</p>
            <button className="block nuxt-link-active btn36-primary-normal float-center">
              GET FREE QUOTE
            </button>    
            </div>

        </div>
      </div>
<br/>
      <Slider {...settings} className="card-product ">

        
<div>


      <div className="container">
      <div className="largedevice">
            <div className="row">
                <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image1} className=" card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold ">
                 
  Contemporary & Classy 4 BHK
  
                  </p>
                  <p className="card-text">
                    Add textural and magnificent touch.
                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image2} className="card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold">

                    Ocean Blue Living Room

                  </p>
                  <p className="card-text">


                    Experience comfort with style.
                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>


            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image3} className="card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold">

                    Sapphire Modular Kitchen

                  </p>
                  <p className="card-text">

                    A dreamy and modern look for your cabinets.
                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>

            </div>
          
            
          </div>


          
      </div>

      </div>


<div>
<div className="container">
      <div className="largedevice">
            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image4} className="card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold">

                    Sapphire Modular Kitchen

                  </p>
                  <p className="card-text">

                    A dreamy and modern look for your cabinets.

                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image5} className="card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold" >


                    Classic Indian Bedroom


                  </p>
                  <p className="card-text">



                    Bring in traditional and exemplary serenity.

                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>


            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <img src={Image3} className="card-img-top img-fluid w-100" alt="..." />
                <div className="card-body">
                  <p className="card-title fw-bold">

                    Sapphire Modular Kitchen

                  </p>
                  <p className="card-text">

                    A dreamy and modern look for your cabinets.
                  </p>
                  <button className="block nuxt-link-active btn36-primary-normal float-center">
                    GET FREE QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div> 
      </div>
  </div>
      
      

      </Slider>
    </div>
  );
};



export default Maincontent;


