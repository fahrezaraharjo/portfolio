import React from 'react'
import "./about.css"
import Me from "../../assets/eja-about.PNG"


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="countainer about__container">
        <div className='about__me'>
        <div className="about__me-image">
          <img src={Me} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
        <div className="about__card">
          <article className='about__card'>

          </article>
        </div>
        </div>
      </div>
      </section>
  )
}

export default about