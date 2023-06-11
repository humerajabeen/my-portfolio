import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h6>What Skills I Have</h6>
      <h4 id='exp'>My Experience</h4>

      <div className="cards">

        <div className="card1">
          <h4 id='title1'>Frontend Development</h4>
          <div className="all_art">
            <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>HTML</h4>
              </article>
              {/* <small>Experienced</small> */}
            </div>

            <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>CSS</h4>
              </article>
              {/* <small>Experienced</small> */}
            </div>

            <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>JavaScript</h4>
              </article>
              {/* <small>Intermediate</small> */}
            </div>

            <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>ReactJS</h4>
              </article>
              {/* <small>Intermediate</small> */}
            </div>

            <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>BootStrap</h4>
              </article>
              {/* <small>Intermediate</small> */}
            </div>

            {/* <div className="in1">
              <article id='in'><BsFillPatchCheckFill />
                <h4>BootStrap</h4>
              </article>
              <small>Beginner</small>
            </div> */}
          </div>

        </div>
        <div className="card2">
          <h4 id='title2'>Backend Development</h4>

          <div className="all_art">

          <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>MySQL</h4>
              </article>
              {/* <small>Experienced</small> */}
            </div>

            <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>Java</h4>
              </article>
              {/* <small>Intermediate</small> */}
            </div>

            <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>MongoDB</h4>
              </article>
              {/* <small>Intermediate</small> */}
            </div>

            {/* <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>C++</h4>
              </article>
              <small>Intermediate</small>
            </div>

            <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>PHP</h4>
              </article>
              <small>Beginner</small>
            </div>

            <div className="in2">
              <article id='in'><BsFillPatchCheckFill />
                <h4>C</h4>
              </article>
              <small>Beginner</small>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience