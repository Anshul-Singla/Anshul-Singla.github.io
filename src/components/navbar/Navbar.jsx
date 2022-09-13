import logo from './logo1.jpg';
import './navbar.style.css'
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar