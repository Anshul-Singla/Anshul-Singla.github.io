import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'
import {IoMdCall} from 'react-icons/io'
import { IconContext } from "react-icons";
import './contact.style.css';

const Contact = () => {
    return (
        <div className="c-wrapper">
                <p className='c-caption'>My inbox is always open, whether you have a question <p> or </p> just want to know me or even just to say hi... </p>
            <div className="c-container">
                <div className="contact_left">
                    <h2>Contact Me</h2>
                    <div className="contact-i" onClick={()=>{window.open('https://github.com/Anshul-Singla')}}>
                        <AiFillGithub size='1.5rem'  />
                        <p> Anshul-Singla</p>
                    </div>
                    <div className="contact-i" onClick={()=>{
                             window.open('https://www.linkedin.com/in/anshul1998/')
                        }}>
                        <AiFillLinkedin size='1.5rem'  />
                        <p>Anshul . </p>
                    </div>
                    <div className="contact-i" onClick={()=>{
                            window.open('https://mail.google.com/mail/u/2/#inbox')
                        }}>
                        <SiGmail size='1.5rem'  />
                        <p>asingla2807@gmail.com</p>
                    </div>
                    <div className="contact-i">
                        <IoMdCall size='1.5rem'  />
                        <p>+91 9821138871</p>
                    </div>
                </div>
                <div className="contact_right">
                    <form action="">
                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" name="" id="" />
                        </fieldset>
                        <fieldset>
                            <legend>Subject</legend>
                            <input type="text" name="" id="" />
                        </fieldset>
                        <fieldset>
                            <legend>Message</legend>
                            <input type="text" name="" id="" />
                        </fieldset>
                        <input type="submit" value='Submit'  />
                    </form>

                </div>
            </div>
            
        </div>
    )
}
export default Contact;