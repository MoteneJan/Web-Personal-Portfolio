 import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME!</h2>

      <div className='container about__container'>
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
              <RiFolderOpenFill className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed Projects</small>
            </article> 

            <article className='about__card'>
              <IoLocationSharp className='about__icon'/>
                <h5>Location</h5>
                <small>Pretoria, Gauteng, SA</small>
            </article>  
          </div>
          
           <p>
             Click the button bellow to get in touch of me.
           </p>

           <a href="#contact" className='btn btn-primary'>Talk To Me</a>
               
        </div>
      </div>
    </section>
  )
}

export default About