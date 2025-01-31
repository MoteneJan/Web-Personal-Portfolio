import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a 
        href="#" 
        onClick={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}
      >
        <div className="nav-item">
          <AiOutlineHome />
          <span>Home</span>
        </div>
      </a>

      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
        <div className="nav-item">
          <AiOutlineUser />
          <span>About</span>
        </div>
      </a>

      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <div className="nav-item">
          <BiBook />
          <span>Experience</span>
        </div>
      </a>

      <a 
        href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <div className="nav-item">
          <RiServiceLine />
          <span>Portfolio</span>
        </div>
      </a>

      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <div className="nav-item">
          <BiMessageSquareDetail />
          <span>Contact</span>
        </div>
      </a>
    </nav>
  );
};

export default Nav;