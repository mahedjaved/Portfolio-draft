import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          {/* main name in h1 title */}
          <h1>
            Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            Mahed
            <br />
            aspiring AI developer
          </h1>

          {/* a h2 title for what I do*/}
          <h2>
            Doctoral graduate in deep learning for computer vision / a tech
            hobbyist / an aspiring AI developer
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
