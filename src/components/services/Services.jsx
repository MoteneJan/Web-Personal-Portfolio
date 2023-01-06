import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>System Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Java Springboot Application Development</p>
            </li>

            
            <li>
              <BiCheck className='service__list-icon' />
              <p>System Analysis and Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>C#.Net Application Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Implementation and Maintainance</p>
            </li>
          </ul>
        </article>
        {/* END OF SYSTEM DEVELOPMENT PART */}
        <article className="service">
          <div className="services__head">
            <h3>Wed Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Hosting and Deploying</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="services__head">
            <h3>Tools Used</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Github</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Bitbucket</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>JIRA</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Git</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services