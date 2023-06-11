import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineDraw } from 'react-icons/md'
import { FaLanguage } from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h6>Get To Know</h6>
      <h3>About Me</h3>

      <div className="content">
        <div className="aboutme">
          <div className="picture">
            <img src={ME} alt="me" height={280} />
          </div>
        </div>

        <article className='art1'>
          <FaGraduationCap />
          <h4>B Tech (CSE)</h4>
          <small>CGPA: 9.6</small>
        </article>

        <article className='art2'>
          <MdOutlineDraw />
          <h4>Hobbies</h4>
          <small>Singing, Doodling quotes</small>
        </article>

        <article className='art3'>
          <FaLanguage />
          <h4>Languages</h4>
          <small>English, Hindi, Urdu, Kannada</small>
        </article>

      </div>
      <div className="para">
        <p>An aspiring software developer skilled in HTML, CSS, MySQL and various other technologies, currently exploring both frontend and backend frameworks . A productive team player seeking for several opportunities to amplify and implement my skills on Java, Web development.</p>
      </div>

    </section>
  )
}

export default about