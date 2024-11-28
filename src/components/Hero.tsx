
import React from 'react'
import Navbar from './Navbar'
import "../app/styles/hero.css"


const Hero = () => {
  return (
    // <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile_image.png)] bg-cover'
    // style={{backgroundSize:"25%",backgroundPosition:"left 150px top 150px"}}
    <div id='hero' className='hero-container'>
      <Navbar/>
      <div className='hero-content'>
      {/* <div className='container lg:grid-cols-2 flex flex-row gap-60'> */}
        <div>
      <img src='ali pic 3.jpg' alt='profile pic' className='profile-pic'
    />
    </div>
        <div className='hidden lg:block'></div>
        <div className='hero-text' >
          <div className='hero-main'>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Ali</p>
            <p data-aos="zoom-in-up">Feroz</p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Hero
