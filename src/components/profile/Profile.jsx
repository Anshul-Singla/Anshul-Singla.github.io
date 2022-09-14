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
                    <h1>Hi <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/waving-hand_1f44b.png"/> </h1>
                    <h1>I am Anshul Singla</h1>
                    {/* <Typist>
                    </Typist> */}
                    <h1 className='typist' >FullStack Web Developer</h1>
                    <p>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
                    <div className='resume' onClick={()=>{
                        window.open('https://drive.google.com/drive/u/2/folders/1_6y2gxNxrO6qei6smrQdVOy449M_tia5')
                    }} > 
                        Resume
                    </div>
                    <div>
                        <IconContext.Provider value={{className:'git-icon'}}>
                            <AiFillGithub size='3rem' onClick={()=>{
                                window.open('https://github.com/Anshul-Singla')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'linkedin-icon'}}>
                            <AiFillLinkedin size='3rem' onClick={()=>{
                                window.open('https://www.linkedin.com/in/anshul1998/')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'gmail-icon'}}>
                            <SiGmail size='3rem' onClick={()=>{
                                window.open('https://mail.google.com/mail/u/2/#inbox')
                            }} />
                        </IconContext.Provider>


                    </div>
                    
                </div>
                <div className="rightDP">
                    <div className="formalPicture">
                        <img src="" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileComponent