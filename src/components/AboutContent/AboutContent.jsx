import "./AboutContent.css"
import education from "../../assets/education.png"
import experience from "../../assets/experience.png"
import pic from "../../assets/profile-pic2.png";
export default function AboutContent(){
    return(
        <section>
         <div className="about-cont">
            <p>Get To Know More</p>
            <h1>About Me</h1>
            <div className="about-cont-area">
                <img id="profile-pic" src={pic} alt="profile-img" />
                <div className="about-cont-sub">
                    <div className="about-cont-sub1">

                    <div id="exp" className="sub-container">
                        <img src={experience} alt="" />
                        <h3>Experience</h3>
                        <p>6+ months
                        Frontend Development</p>
                    </div>
                    <div id="edu" className="sub-container">
                        <img src={education} alt="" />
                    <h3>Education</h3>
                        <p>B.Sc(CS) Bachelors Degree<br />
                           M.Sc(CS) Currently Pursuing
                        </p>
                    </div>
                    </div>
                    <p>Hello! My name is Vishal Dhokchaule, and I am a passionate front-end developer with over 6 months of hands-on experience in building user-friendly web interfaces. I hold a Bachelor's degree in Computer Science (BSc) and am currently pursuing a Master's degree in Computer Science to further expand my technical knowledge and skill set. I am dedicated to creating clean, responsive, and efficient code, and I'm always excited to learn and grow in the fast-evolving world of web development.</p>
                </div>
            </div>
         </div>
        </section>
    )
}