import React from 'react'
import './header.css'
import CV from '../../assests/resume.pdf'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import ME from '../../assests/working.jpg'

const header = () => {
  return (
    <header>
      <div className="name">
        <h4>Hello, I'm</h4>
        <h1>Humera Jabeen</h1>
        <h5>Software Developer</h5>
        <div className="btn1">
          <a href={CV} download>Download CV</a>
          <a href="#contact">Let's Talk</a>
        </div>
      </div>
      <a href="#contact" className='scroll'>Scroll Down</a>
      <div className="socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
      </div>
      <div className="me">
      <img src={ME} alt="" height={400} width={257} />
      </div>
    </header>
  )
}

export default header