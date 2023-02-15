import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'
import { IconContext } from "react-icons";
import './Profile.style.css';
import profilePic from './dp.png'
import Typist from 'react-typist';
const ProfileComponent = ()=>{
    
    return (
        <div className="profile-wrapper" id='home'>
            <div className="profile-container">
                <div className="leftBio">
                    <h1>Hi <img src="https://media.tenor.com/z2xJqhCpneIAAAAM/wave-hand.gif"/> </h1>
                    <h1>I am Anshul Singla</h1>
                    {/* <Typist>
                    </Typist> */}
                    <h1 className='typist' >FullStack Web Developer</h1>
                    <p>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
                    <div className='resume' onClick={()=>{
                        window.open('https://drive.google.com/file/d/1JAMfb0zIpr2kMlOWdT6XQGnRALyNjaIB/view?usp=sharing')
                    }} >
                        <img src="https://hotemoji.com/images/dl/d/pointing-finger-emoji-by-google.png" alt="" />
                        <a href="Anshul-Singla-Resume.pdf" download>Resume</a>
                        
                    </div>
                    {/* <a href="" download='' ></a> */}
                    <div>
                        <IconContext.Provider value={{className:'git-icon'}}>
                            <AiFillGithub size='2rem' onClick={()=>{
                                window.open('https://github.com/Anshul-Singla')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'linkedin-icon'}}>
                            <AiFillLinkedin size='2rem' onClick={()=>{
                                window.open('https://www.linkedin.com/in/anshul1998/')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'gmail-icon'}}>
                            <SiGmail size='2rem' onClick={()=>{
                                window.open('https://mail.google.com/mail/u/2/#inbox')
                            }} />
                        </IconContext.Provider>


                    </div>
                    
                </div>
                <div className="rightDP">
                    <div className="formalPicture">
                        <img src={profilePic} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileComponent