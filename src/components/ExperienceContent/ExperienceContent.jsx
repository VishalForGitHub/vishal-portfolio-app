import "./ExperienceContent.css"
import checkmark from "../../assets/checkmark.png"
export default function ExperienceContent(){
    return(
        <div className="experience-content">
            <p>Explore My</p>
            <h1>Experience</h1>
            <div className="card-container">
                 <div className="card">
                      <h2 id="card-heading">Frontend Development</h2>
                      <div className="card-articles">
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>HTML</h3>
                              <p>Experienced</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>CSS</h3>
                              <p>Experienced</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>JavaScript</h3>
                              <p>Experienced</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>React.js</h3>
                              <p>Experiencede</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>Material UI</h3>
                              <p>Intermediate</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>Express.js</h3>
                              <p>Intermediate</p>
                            </span>
                        </article>
                      </div>
                    
                      
                 </div>

                 <div className="card">
                      <h2 id="card-heading">Frontend Development</h2>
                      <div className="card-articles">
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>SQL</h3>
                              <p>Intermediate</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>Node.js</h3>
                              <p>Intermediate</p>
                            </span>
                        </article>
                        <article>
                            <img src={checkmark} alt="checkmark" />
                            <span>
                              <h3>Git</h3>
                              <p>Intermediate</p>
                            </span>
                        </article>
                        
                      </div>
                    </div>
            </div>           
        </div>
    )
}