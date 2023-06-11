import React from 'react'
import './footer.css'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'

const footer = () => {
  return (
    <footer>
      <h1>HUMERA</h1>
      <ul id='links'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className="social">
        <a href="https://facebook.com" target="__blank"><SlSocialFacebook /></a>
        <a href="https://instagram.com" target="__blank"><SlSocialInstagram /></a>
        <a href="https://twitter.com" target="__blank"><SlSocialTwitter /></a>
      </div>

      {/* <div >
        <small id="copy">&copy; HumeraJabeen. All rights reserverd. </small>
      </div> */}

    </footer>
  )
}

export default footer