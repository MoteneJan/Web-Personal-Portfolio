import React, { useRef, useState } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wm9cfla', 'template_5bmgh4f', form.current, 'wO-GWqBp9qNHmDziS')
      .then(
        () => {
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000); // Hide message after 5 seconds
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>motenejo@gmail.com</h5>
            <a href="mailto:motenejo@gmail.com" target='_blank' rel='noopener noreferrer'>Send an Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jan Motene</h5>
            <a href="https://web.facebook.com/MoteneEmjay" target='_blank' rel='noopener noreferrer'>Send a Messenger Text</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+27793530741</h5>
            <a href="https://api.whatsapp.com/send?phone=+27793530741" target='_blank' rel='noopener noreferrer'>Send WhatsApp Text</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {messageSent && <p className="confirmation-message">Message sent!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
