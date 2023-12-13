import React from 'react'
import logo9  from './Image/logo9.png'
import logo10 from './Image/logo10.jpg'
import logo11 from './Image/logo11.jpg'
import banner from './Image/top-10-best-interior-designers-bangalore-mumbai-hyderabad-india-690x380.webp'
import './App.css'
export default function Footer() {
  return (
    <>

    <br/>
    <br/>

     <div className='container'>
<div className='row'>
  <h2>In the news</h2>
</div>
 <div className='row'>
 <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border shadow-sm p-3 mb-5 bg-body rounded" >
                <img src={logo9} className="card-img-top w-50 mx-5" alt="..." />
                <div className="card-body">
                  <p className="card-text fst-italic">
  “The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration, information and technology”
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border shadow-sm p-3 mb-5 bg-body rounded">
                <img src={logo11} className="card-img-top w-50 mx-5" alt="..." />
                <div className="card-body">
                  <p className="card-text fst-italic">


                  “The company has also opened Experience Centres (ECs) spanning 1500 sq ft each in prime locations in all four cities.”
                    </p>
                 
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-xxl-4 col-md-4 col-xs-12 col-sm-12'>
              <div className="card border shadow-sm p-3 mb-5 bg-body rounded">
                <img src={logo10} className="card-img-top w-50 mx-5" alt="..." />
                <div className="card-body">
                  <p className="card-text fst-italic">


                  “Livspace has joined the unicorn club after the online home décor startup backed by private equity firm TPG raised $180 mn at a valuation of over $1.2 bn…”
                    </p>
                 
                </div>
              </div>
            </div>

 </div>
</div>

    
<div className='bg-light'>
<div className='container p-5'>
      <div className='row '>
        <h2>Meet Our Designers</h2>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-xs-12 col-sm-12'>
          <h4>The magicians who transform and create space...</h4>
          <div className='row'>
          <p>
            Boho chic, rustic, mediterranean, minimalist, modern, industrial, 
            classic-contemporary, art deco, traditional – 
            do you get lost with these terms? 
            Or perhaps you know what you want, but don’t know how to get there?</p>
          </div>

          <div className='row'>
            <p>
            That is why we have a team of 400+ designers to advise customers.</p>
          </div>
          <div className='row'>
          <button  className="block nuxt-link-active btn36-primary-normal ">
      Talk to us
    </button>
          </div>
        </div>
        <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-xs-12 col-sm-12'>
          <img src={banner} className='img-fluid footerbanner'/>
        </div>
      </div>
    </div>
</div>
  
    </>
     )
}
