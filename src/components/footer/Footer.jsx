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
        <a href="https://www.facebook.com/MoteneEmjay"><FaFacebookF/></a>
        <a href="https://www.instagram.com/emjay_motene" ><FiInstagram/></a>
        <a href="https://x.com/emjay_moh" ><RiTwitterXLine/></a>
      </div>

     <div className="footer__copyright">
      <small>&copy;Jan Motene 2025, All Right Reserved.</small>
     </div>
    </footer>

  )
}

export default Footer