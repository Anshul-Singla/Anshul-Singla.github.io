import logo from './logo1.jpg';
import './navbar.style.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-scroll';
 const Navbar =()=>{
    return(
        <div className="n-wrapper">
            <div className="n-leftSide">
                <div className="logo">
                <Link to='home' smooth={true} spy={true} duration={500}>
                    <img src={logo}  />
                </Link>
                </div>
            </div>
            <div className="n-rightSide">
                <div className="n-list">
                    <ul>
                        <Link to='about' smooth={true} spy={true} duration={500}>
                            <li>About</li>
                        </Link>
                        <Link to='' smooth={true} spy={true} duration={500}>
                            <li>Exprience</li>
                        </Link>
                        <Link to='skills' smooth={true} spy={true} duration={500}>
                            <li>Skills</li>
                        </Link>
                        <Link to='project' smooth={true} spy={true} duration={500} >
                            <li>Projects</li>
                        </Link>
                        <Link to='contact' smooth={true} spy={true} duration={500}>
                            <li>Contact</li>
                        </Link>
                        <li  >
                        <div  onClick={()=>{
                        window.open('https://drive.google.com/file/d/1JAMfb0zIpr2kMlOWdT6XQGnRALyNjaIB/view?usp=sharing')
                    }} > <a href="Anshul-Singla-Resume.pdf" download>Resume</a>
                        
                    </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hamburger'>
             <GiHamburgerMenu/>
            </div>
        </div>
    )
}
export default Navbar