import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>SOFTWARE DEVELOPMENT</h3>
          <div className="experience__content">
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>OOP DESIGN</h4>
                <small className='text-light'>Experienced</small>
                </div>              
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>RESTful APIs</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>WEB DEVELOPMENT</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PROJECT MANAGEMENT</h4>
                <small className='text-light'>Intermediate</small>
              </div>             
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SYSTEM ANALYSIS & DESIGN</h4>
                <small className='text-light'>Experienced</small>
              </div>             
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DATABASE MANAGEMENT</h4>
                <small className='text-light'>Experienced</small>
              </div>             
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
        <h3>DATA SCIENCE</h3>
          <div className="experience__content">

          <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DATA MANIPULATION</h4>
                <small className='text-light'>Experienced</small>
              </div>            
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DATA GOVERNANCE</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DATA VISUALISATION</h4>
                <small className='text-light'>Experienced</small>
              </div>       
               </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MACHINE LEARNING</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            
            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ANALYTICAL PROGRAMMING</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details '>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>DEEP LEARNING</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience