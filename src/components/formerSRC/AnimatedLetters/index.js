import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  // pass in the AnimatedLetters as a useState hook
  const [letterClass, setLetterClass] = useState('text-animate')

  // initialise characters to aniamte
  const nameArray = ['m', 'a', 'h', 'e', 'd']
  const jobArray = [
    'a',
    's',
    'p',
    'i',
    'r',
    'i',
    'n',
    'g',
    ' ',
    'a',
    'i',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          {/* main name in h1 title */}
          <h1>
            {/* just a cool way to setting animation delay property */}
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            {/* the logo before the rest of the name follows */}
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>

          {/* a h2 title for what I do*/}
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h2>

          {/* Link to contacts page */}
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
