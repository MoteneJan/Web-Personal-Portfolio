import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME!</h2>

      <div className='container about__container'></div>
      <div className="about__me">
        <div className="about__me-image">
        <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working Experience</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>20+ Clients Worldwide</small>
          </article>

          <article className='about__card'>
            <RiFolderOpenFill className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed Projects</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor. Animi itaque mollitia excepturi corporis laudantium quidem veniam recusandae veritatis.
        </p>

        <a href="#contact" className='btn btn-primary'>Talk To Me</a>

      </div>

    </section>
  )
}

export default About