import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBlackboard,
  faBook,
  faEnvelope,
  faHome,
  faNewspaper,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSkype,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>

    {/* adding a NavLink below the Logo present in the NavBar, this will link to every single page, for that exact needs to be true, for rest keep false*/}
    <nav>
      {/* the first NavLink will be the Home page */}
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      {/* object 2 : About Me*/}
      <NavLink
        exact="false"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      {/* object 3 : Contact Me */}
      <NavLink
        exact="false"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>

      {/* object 4 : Publications*/}
      <NavLink
        exact="false"
        activeclassname="active"
        className="publications-link"
        to="/publications"
      >
        <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
      </NavLink>

      {/* object 5 : Projects*/}
      <NavLink
        exact="false"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faBlackboard} color="#4d4d4e" />
      </NavLink>

      {/* object 5 : Blogs*/}
      <NavLink
        exact="false"
        activeclassname="active"
        className="blogs-link"
        to="/blogs"
      >
        <FontAwesomeIcon icon={faNewspaper} color="#4d4d4e" />
      </NavLink>
    </nav>

    {/* add links to our portfolio accounts: Github, LinkedIN */}
    <ul>
      {/* LinkedIn link */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://uk.linkedin.com/in/mahed-javed-6391a836"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      {/* Github link */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mahedjaved"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      {/* YouTube link */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@mahedksf"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      {/* Skype link */}
      <li>
        <a target="_blank" rel="noreferrer" href="skype:live:ksfmahed">
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
