import "./ProjectsContent.css"
import buzznews from "../../assets/BuzzNews.jpg";
export default function ProjectsContent(){
    return(
       <div className="ProjectsContent">
            <p>Browse My Recent</p>
            <h1>Projects</h1>

            <div className="pro-cont-cards-container">
                 <div className="pro-cont-card">
                    <img src={buzznews} alt="pic" />
                    <h2>Project One</h2>   
                    <span className="pro-cont-btns">
                      <a href="https://github.com/VishalForGitHub/NewsWeb.git" target="_blank"><p>GitHub</p></a>
                      <a href="https://main--zingy-pothos-ec560f.netlify.app/page2.html" target="_blank"><p>Live Demo</p></a>
                    </span>
                 </div>
            </div>
       </div>
    )
}