import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'
import { IconContext } from "react-icons";
import './Profile.style.css';
import Typist from 'react-typist';
const ProfileComponent = ()=>{
    return (
        <div className="profile-wrapper">
            <div className="profile-container">
                <div className="leftBio">
                    <h1>Hi, I am Anshul Singla</h1>
                    <Typist>
                        <h1>Full Stack Web Developer</h1>
                    </Typist>
                    <p>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
                    <a href=""><button> Resume</button></a>
                    <div>
                        <IconContext.Provider value={{className:'profile-icons'}}>
                            <AiFillGithub size='3rem' />
                            <AiFillLinkedin size='3rem' />
                            <SiGmail size='3rem' />
                        </IconContext.Provider>


                    </div>
                    
                </div>
                <div className="rightDP"></div>

            </div>
        </div>
    )
}
export default ProfileComponent