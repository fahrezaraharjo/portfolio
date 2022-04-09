import React from 'react'
import "./about.css"
import Me from "../../assets/eja-about.PNG"
import { BsAwardFill } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


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
              <BsAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3 Month</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>-</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>project</h5>
              <small>3+ Complited</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus in! Aperiam repellendus ad veritatis repellat at libero totam vel eveniet officia numquam voluptates aut, impedit modi corporis facilis odit?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about