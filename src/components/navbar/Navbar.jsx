import logo from './logo1.jpg';
import './navbar.style.css';
import {GiHamburgerMenu} from 'react-icons/gi';
 const Navbar =()=>{
    return(
        <div className="n-wrapper">
            <div className="n-leftSide">
                <div className="logo">
                    <img src={logo}  />
                </div>
            </div>
            <div className="n-rightSide">
                <div className="n-list">
                    <ul>
                        <li>About</li>
                        <li>Exprience</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>
                        <div className='resume' onClick={()=>{
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