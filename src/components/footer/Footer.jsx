import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JAN MOTENE</a>
 
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div  className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com" ><FiInstagram/></a>
        <a href="https://facebook.com" ><RiTwitterXLine/></a>
      </div>

     <div className="footer__copyright">
      <small>&copy; 2022, All Right Reserved.</small>
     </div>
    </footer>

  )
}

export default Footer