import React from 'react'
import CV from '../../assets/MOTENE JO- RESUME.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Talk To Me!</a>
    </div>
  )
}

export default CTA