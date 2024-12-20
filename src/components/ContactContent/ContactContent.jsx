import "./ContactContent.css"
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import { scroll } from "../../Helper/helper.js"
export default function ContactContent(){
    return(
        <div className="contact-content">
            <p>Get in Touch</p>
            <h1>Contact Me</h1>
            <div className="contact-links">
                <div className="contact-link">
                  <img src={email} alt="email"  id="email"/><a href="mailto:vishaldhokchaule.contact@gmail.com">vishaldhokchaule.contact@gmail.com</a>
                  <img src={linkedin} alt="linkedin" id="linkedin"/><a href="https://www.linkedin.com/in/vishal-dhokchaule-129575222" target="_blank">Linkedin</a>
                </div>
            </div>

                <div className="fileds">
                   
                        <ul onClick={scroll}>
                            <li>About</li>
                            <li>Experience</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    
                </div>
            <footer>
                <p>Copyright © 2024 Vishal Dhokchaule All Rights Reserved.</p>
            </footer>
        </div>
    )
}