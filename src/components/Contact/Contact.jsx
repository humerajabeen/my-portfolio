import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {MdWhatsapp} from 'react-icons/md'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfjmsmu', 'template_1q5lnrm', form.current, 'r7QBGTIgxFh9gDSig')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h6>Get In Touch</h6>
      <h3>Contact Me</h3>
      <div className="cont">
      <div className="left">

        <div className="left1">
          <MdOutlineEmail/>
          <h5>Email</h5>
          <small>humerajabeeen@gmail.com</small>
          <br />
          <a href="mailto:humerajabeeen@gmail.com" target="__blank">Send a message</a>
        </div>

        <div className="left2">
          <RiMessengerLine/>
          <h5>Messenger</h5>
          <small>humera jabeen</small>
          <br />
          <a href="https://m.me/humerajabeen.23" target="__blank">Send a message</a>
        </div>

        <div className="left3">
          <MdWhatsapp/>
          <h5>WhatsApp</h5>
          <small>9606711337</small>
          <br />
          <a href="https://api.whatsapp.com/send?phone=9606711337" target="__blank">Send a message</a>
        </div>

      </div>
      <form ref={form} onSubmit={sendEmail}>
      <div className="right">
        <input type="text" name="name" id="name" placeholder='Your Full Name' required />
        <input type="email" name="email" id="email" placeholder='Your Email' required/>
        <textarea name="msg" id="msg" cols="40" rows="7" placeholder='Your Message' required></textarea>
        <button id='btn5' type='submit'>Send Message</button>
      </div>
      </form>
      </div>
    </section>
  )
}

export default Contact