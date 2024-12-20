import "./HomeContent.css"
import menu from "../../assets/menu.png";
import close from "../../assets/close.png"
import pic from "../../assets/profile-pic.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import { useState } from "react";
import {scroll} from "../../Helper/helper.js"
import vishalResume from "../../assets/vishalResume.pdf"
export default function HomeContent(){
    let[menuClick,setMenuClick]=useState(false);

    let setClick=()=>{
        setMenuClick(!menuClick);
    }
    return(
        <div className="home-content">
            <nav>
                <div className="nav-bar">
                    <h2>Vishal Dhokchaule</h2>
                    <div className="side-nav">
                        <ul onClick={scroll}>
                            <li>About</li>
                            <li>Experience</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="hamburger-nav" onClick={setClick}>
                       <img src={menuClick?close:menu} alt={menuClick?close:menu} />
                    </div>
                    {/* <hr /> */}
                </div>

                <div className="floating-menu" style={{display:menuClick ? "block" : "none"}}>
                    <ul onClick={scroll}>
                        <li>About</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
            </nav>
            <div className="person-details">
               <img src={pic} alt="profile-pic" />
               <div className="user-content">
                  <p>Hello, I'm</p>
                  <h2>Vishal Dhokchaule</h2>
                  <h3>Frontend Developer</h3>
                  <span className="btns">
                    <a href={vishalResume} download="vishalResume.pdf" id="download-cv">Download CV</a>
                    <button className="btn" id="contact-info" onClick={scroll}>Contact Info</button>
                  </span>

                  <span className="social-img">
                    <a href="https://www.linkedin.com/in/vishal-dhokchaule-129575222" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/VishalForGitHub" target="_blank"><img src={github} alt="github" /></a>
                  </span>
               </div>
            </div>
        </div>
    )
}