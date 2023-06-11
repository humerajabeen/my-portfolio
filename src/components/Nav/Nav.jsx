import React from 'react'
import './Nav.css'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { AiOutlineBook } from 'react-icons/ai'
import { GiBookshelf } from 'react-icons/gi'
// import { TbCertificate } from 'react-icons/tb'
import { RiContactsLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2 /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiBookshelf /></a>
      {/* <a href="#certificate" onClick={() => setActiveNav('#certificate')} className={activeNav === '#certificate' ? 'active' : ''}><TbCertificate /></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav