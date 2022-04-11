import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

//DO NOT USE THE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    demo: "https//dribbbel.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    demo: "https//dribbbel.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    demo: "https//dribbbel.com/shots/17290917-Eclipse-Figma-dashboards-and-financial-data-design-web-apps"
  },
  {
    id: 4,
    image: IMG4,
    github: "https://github.com",
    title: "Maintaining task and tracking progress",
    demo: "https//dribbbel.com/shots/16955822-Maintaining-task-and-tracking-progress"
  },
  {
    id: 5,
    image: IMG5,
    github: "https://github.com",
    title: "Charts templates & infographics in Figma",
    demo: "https//dribbbel.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 6,
    image: IMG6,
    github: "https://github.com",
    title: "Charts templates & infographics in Figma",
    demo: "https//dribbbel.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
]
const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio