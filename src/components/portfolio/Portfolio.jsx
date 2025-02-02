import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Anime.png'
import IMG2 from '../../assets/Segmentation.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG1} alt="" />
         </div>
         <h3>Anime Recomendation App</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Anime_Recommender_Stystem" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>         
       </article>

       <article className='portfolio__item'>
         <div className="portfolio_item-image">
           <img src={IMG2} alt="" />
         </div>
         <h3>Height Segmentation Model </h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/MoteneJan/" className='btn' target='_blank'>Github</a>
         <a href="https://github.com/MoteneJan/Segmentation-model-app" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
       </article>
      </div>      
    </section>
  )
}

export default Portfolio