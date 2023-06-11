import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h6>My recent work</h6>
      <h4>Portfolio</h4>
      <div className="arts">

        <div className="ar2">
          <article id='port'>
            <div className="img">
              <img src={IMG2} alt="" height={200} width={250} />
            </div>
            <p>MySocials - Social Media</p>
            <div id="links">
              <a href="https://github.com/humerajabeen/mysocials.git" className='btn3' target="__blank">GitHub</a>
              <a href="https://drive.google.com/uc?id=1lwANPhWaGQiAdmAUFtAORFoTJ1tJrJ8f&export=download" className='btn4' target="__blank">Live Demo</a>
            </div>
          </article>
        </div>

        <div className="ar4">
          <article id='port'>
            <div className="img">
              <img src={IMG4} alt="" height={200} width={250} />
            </div>
            <p>Finanzia - Bank transactions</p>
            <div id="links">
              <a href="https://github.com/humerajabeen/finanzia.git" className='btn3' target="__blank">GitHub</a>
              <a href="https://drive.google.com/uc?id=1J0lpowsDGrzpP9sNHIT6NP3ccL9J74wu&export=download" className='btn4' target="__blank">Live Demo</a>
            </div>
          </article>
        </div>

        <div className="ar1">
          <article id='port'>
            <div className="img">
              <img src={IMG1} alt="" height={200} width={250} />
            </div>
            <p>Rentaze - Rent or adopt pets</p>
            <div id="links">
              <a href="https://github.com/humerajabeen/Rentaze.git" className='btn3' target="__blank">GitHub</a>
              <a href="https://drive.google.com/uc?id=1-NwhbQvS3cMgf9BFt4JsBKK6OPsuIC5_&export=download" className='btn4' target="__blank">Live Demo</a>
            </div>
          </article>
        </div>

        <div className="ar5">
          <article id='port'>
            <div className="img">
              <img src={IMG5} alt="" height={200} width={250} />
            </div>
            <p>Pig game</p>
            <div id="links">
              <a href="https://github.com/humerajabeen/pig-game.git" className='btn3' target="__blank">GitHub</a>
              <a href="https://drive.google.com/uc?id=18nJ0Ctlx5gFz-o_izCKAgQWG0Q4FgACw&export=download" className='btn4'>Live Demo</a>
            </div>
          </article>
        </div>

        <div className="ar6">
          <article id='port'>
            <div className="img">
              <img src={IMG6} alt="" height={200} width={250} />
            </div>
            <p>Event management portal</p>
            <div id="links">
              <a href="https://github.com" className='btn3' target="__blank">GitHub</a>
              <a href="" className='btn4' target="__blank">Live Demo</a>
            </div>
          </article>
        </div>

        <div className="ar3">
          <article id='port'>
            <div className="img">
              <img src={IMG3} alt="" height={200} width={250} />
            </div>
            <p>Tours and Travels</p>
            <div id="links">
              <a href="https://github.com/humerajabeen/tourism.git" className='btn3' target="__blank">GitHub</a>
              <a href="https://drive.google.com/uc?id=18gEL0FjUXNQb_8qtsmCo9PwiPbDhwst_&export=download" className='btn4' target="__blank">Live Demo</a>
            </div>
          </article>
        </div>



      </div>

    </section>
  )
}

export default portfolio