import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'> 
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />

        </Link>
        
        {/* adding a NavLink below the Logo present in the NavBar, this will link to every single page, for that exact needs to be true, for rest keep false*/}
        <nav>
            {/* the first NavLink will be the Home page */}
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar