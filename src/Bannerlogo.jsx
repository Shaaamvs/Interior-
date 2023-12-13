import React from 'react'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './App.css'
export default function Bannerlogo() {
    return (

        <>
            <div className='container mt-5' >
                <div className='row cardslogo' >
                    <div className='col-lg-4 col-xl-4 col-md-4 col-xs-12 col-sm-12 col-xxl-4 ' >
                        <div className="hover" >
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <PersonalVideoIcon />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Personalised designs</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 col-xl-4 col-md-4 col-xs-12 col-sm-12 col-xxl-4 '>
                        <div className="hover ">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <MilitaryTechSharpIcon />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Flat 10-year warranty¹</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-lg-4 col-xl-4 col-md-4 col-xs-12 col-sm-12 col-xxl-4 '>
                        <div className="hover">
                            <div className="card my-card bg-light ">
                                <div className="mt-2 text-center">
                                    <LocalOfferIcon />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Transparent pricing</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <div className='bg-light'>
                <div className='container'>
                    <div className='row' >
                        <div className='text-center designcrave'>
                            <h1>The home design you crave</h1>

                            <p className=''>
                                When you give your home the Livspace touch, you get both beauty and functionality.
                                We employ state-of-the-art technology to ensure your home features a flawless look that lasts a very long time.</p>

                            <button className="freebutton w-50">

                            Book Free Consultation

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
