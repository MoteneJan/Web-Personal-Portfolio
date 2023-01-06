import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
       <h4>Hello I am</h4>
       <h1>JAN OUPANA MOTENE</h1>
       <h3 className='text-light'>Junior Software Developer</h3>
        <CTA />
        <HeaderSocial/>
              
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>     
    </header>
  )
}

export default Header

