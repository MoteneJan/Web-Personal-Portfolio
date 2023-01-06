import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>motenejo@gmail.com</h5>
            <a href="mailto:motenejo@gmail.com">Send an Email</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Messenger</h4>
            <h5>Jan Motene</h5>
            <a href="https://">Send an Email</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>WhatsApp</h4>
            <h5>motenejo@gmail.com</h5>
            <a href="+2793530741">Send an Email</a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Contact