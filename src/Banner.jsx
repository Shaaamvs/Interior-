import React from 'react';
import Logo from './Image/livspace-1695932166-AWR5M.svg'
import './App.css'
import './Mediaquiery.css'
import  { useEffect, useState } from 'react';


export default function Banner() {
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
     {/* <div className='container-fluid mt-1 shadow-sm p-3 mb-0 bg-body rounded'>
        <img src={Logo} className='img-fluid logo'/>

        <button  className="block nuxt-link-active btn36-primary-normal float-end">
      GET FREE QUOTE
    </button>
    </div> */}

<div className={`container-fluid mt-1 fixed-top shadow-sm p-3 mb-0 bg-body rounded ${scrollingUp ? '' : 'header-hidden'}`}>
      <img src={Logo} className='img-fluid logo' alt='Logo' />

      <button className="block nuxt-link-active btn36-primary-normal float-end">
        GET FREE QUOTE
      </button>
    </div>


    <div className='row'>
  <div className='bgimg'>
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-xs-12 col-sm-12'>
      <div className='container mt-5 heading'>
        <h2 className='interiors'>
        Your dream home  is just a click away
        </h2>
       
          <p className='quality'>Experience unmatched quality & timely delivery with Livspace</p>
          <button  className="block nuxt-link-active btn36-primary-normal ">
      Book a free consultation
    </button>
      </div>
    </div>

   
    </div>
   



</div>

  </div>


    
    </>
   

  )
}
