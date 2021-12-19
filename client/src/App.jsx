import './App.css';
import selfie from "./images/selfie.png";
import bioImage from "./images/bio.JPG";
import ELogo from "./images/email.png";
import LLogo from "./images/linkedin.png";
import GLogo from "./images/github.png";
import GrayGit from "./images/githubGreyLogo.png";
import ThreeDot from "./images/threeDot.png";
import LearnToCook from "./images/dashboardPage.png";
import ProVice from "./images/qustionAnswer.png";
import Mario from "./images/mario.png";
import {scroller, bioScroller, projectScroller, descriptionClose1, descriptionOpen1, descriptionClose2, descriptionOpen2, descriptionClose3, descriptionOpen3} from "./js/introScroller";
function App() {
  return (
    <html>
      <head>
        
      </head>
    <div id="body">
      <nav className="navbar">
        <div className="navbar_block">
            <div className="links">
              <div className='menu-buttons'>
                <a href="#intro" >Home</a>
              </div>
              <div className='menu-buttons'>
                <a href="#bio" >About</a>
              </div>
              <div className='menu-buttons'>
                <a href="#projects">Projects</a>
              </div>
              <div className='menu-buttons'>
                <a href="https://docs.google.com/document/d/1yiERknxvQLEHC88zE83m0mrzPH7XdRkdJhFOFz-iW2g/edit?usp=sharing">Resume</a>
              </div>
              <div className='menu-buttons'>
                <a href="#contact">Contact</a>
              </div>
          </div>
        </div>
      </nav>
        <div className="intro" id="intro">
          <div className="intro_body">
            <img className="introImage" src={ selfie } alt="Skye's selfie" style={ { transform: "translate3d(0,0,0)"} }/>
            <div className="intro_content">
              <h2>Full stack web developer with experience in Javascript, Python, Java, HTML, CSS, SQL, MongoDB, Flask, STS, and React. </h2>
            </div>
          </div>
      </div>
        <div className="bio" >
          <div className="bio_header">
            <h1>About</h1>
          </div>
          <div className="bio_body" id="bio">
              <h4 className="bio_content">  Critcal Thinker, Methodical, Idealist, and Jack of All Trades. <span>Whatever Skye does, he does with heart and integrity.</span> Native of Hawaii growing up in a remote area of Maui, he had to work hard and earn everthing he has. As a child from a rural area he had to learn trade skills out of necessity. <span> His vast skill set, experience, and work ethic make him an asset</span> to anyone he works with. After much thought and deliberation about the future, Skye decided to try his hand at coding knowing it was unlike anything that he had done before. He practiced coding every chance he got.  Learning something new everyday made him hunger for more. Finally after months of practice, he was ready to make a career change. He <span>signed up with Coding Dojo</span>, one the most pristigious coding bootcamps in the United States. Consistantly a top performer and always helping out where he could, he made the most of his time there. Now he is ready for his first programming venture!
            </h4>
            <div className="bio_image">
              <img  src={ bioImage } alt="Skye walking towards a waterfall." />
            </div>  
          </div>
        </div>
        <div  className="code">
            <div   className="projects_section">
              <h1>Technologies</h1>
            </div>
            <div className="code_content">
              <div><p>Python</p><p>Java</p><p>HTML</p><p>CSS</p><p>Javascript</p><p>Flask</p><p>Spring</p><p>Node.js</p><p>React.js</p></div>
              <div><p>Express.js</p><p>Bootstrap</p><p>AWS</p><p>Mongoose</p><p>MongoDB</p><p>MySQL</p><p>AJAX</p><p>Maven</p></div>
              <div><p>jQuery</p><p>Angular</p><p>Mongoose.js</p><p>Axios</p><p>MySQL</p><p>MongoDB</p></div>
              <div><p>Postman</p><p>VScode</p><p>SpringToolSuite</p><p>MySQLWorkbench</p></div>
            </div>
        </div>
        <div className='project_header'>
          <h1 id="projects">Projects</h1>
        <div className="projects">
          <div className='project'>
            <div className='project_box'>
              <img className='project_img' src={LearnToCook}/>
              <h4>Learn Cooking Essentials</h4>
              <div className='project_links' >
                <a className='project_a' href="https://github.com/Skye967/Projects/tree/branching/CookingProject"><img className='projectLinks_img' src={GrayGit} /></a>
                  <a onClick={descriptionOpen1} id='myBtn' className='project_a'><img className='projectLinks_img' src={ ThreeDot } /></a>
                  
                <div id="myModal1" class="modal">
                  <div class="modal-content">
                    <button onClick={descriptionClose1} class="close">&times;</button>
                    <ul>
                      <li>Created this website using Python, Flask, and MySql.</li>
                      <li>Utilized HTML to add an embeded video and an article on common cooking mistakes and a link to the registration page</li>
                      <li>Registration and Login was created with an email and password validator using Regex and utilized Bcrypt to create a hashed password. Once validated the new User is added to the database via MySql query.</li>
                      <li>Percentage of completion was created by using a MySql query for all the lessons completed for that category then a simple math equation to find the percentage of completion. User image uploads are added to the dashboard by first querying for them then utlizing jinja2 to loop through making image tags for all images.</li>
                      <li>Each lesson has a recipe and an embeded video to follow. Image upload was made by first adding the image to a local folder then saving the file path to that image in the database.</li>
                      <li>Made one to many relationship between Users and Images, One to one relationship between Lessons and Images</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='project_box'>
              <img className='project_img' src={ProVice}/>
              <h4>Professional Advice</h4>
              <div className='project_links'>
                <a className='project_a' href="https://github.com/Skye967/Projects/tree/branching/ProAdviceProject"><img className='projectLinks_img' src={GrayGit}  /></a>
                  <a onClick={descriptionOpen2} id='myBtn' className='project_a'><img className='projectLinks_img' src={ ThreeDot } /></a>
                  
                  <div id="myModal2" class="modal">
                  <div class="modal-content">
                    <button onClick={descriptionClose2} class="close">&times;</button>
                    <ul>
                    <li>Created this App with Spring Tool Suite, Java, and MySql</li>
                    <li>One to many relationships between Users and Questions, Answers, and Comments. Many to many relationship between Users and Professions. One to many relationships between Questions and Answes, and Comments. Many to many relationship between questions and tags. One to many relationship between Answers and Comments</li>
                    <li>Regestration and Login was made with Bcrypt to hash and check passwords</li>
                    <li>Utlized JPA query and algorythims to pull list of User's Professions, search Questions, add Questions, Tags, Answers, and Comments, while querying the database before adding.</li>
                    <li>Used JSP Form tags and C tags to perform logic and take and display information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='project_box'>
              <img className='project_img'  src={Mario}/>
              <h4>Mario Clone</h4>
              <div className='project_links'>
                <a className='project_a' href="https://github.com/Skye967/Projects/tree/branching/MarioProject"><img className='projectLinks_img' src={GrayGit} /></a>
                  <a onClick={descriptionOpen3} id='myBtn' className='project_a'><img className='projectLinks_img' src={ ThreeDot } /></a>
                  
                  <div id="myModal3" class="modal">
                  <div class="modal-content">
                    <button onClick={descriptionClose3} class="close">&times;</button>
                    <ul>
                      <li>Created the background by using javascript to create image tiles from an image board by making a class that takes in pixels as coordinates then setting the height and width. Using a JSON file to take the image and set how many image tiles long and wide then a function to draw an image of the whole background.</li>
                      <li>Mario was made by attaching a javascript class to an image of Mario that has different functions to control jumping and gravity. And the image of mario is redrawn to the new coordinates as the jump progresses.</li>
                      <li>Made Jump by setting  gravity as a constant that moves mario a certain amount of pixels per milasecond, then jump has an initial velocity that is moving Mario a certain amount of pixels that decreases over time until it's back at gravity's constant.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div id="contact" className="contact">
            <div className="contact_header">
              <h2>Let's work together!</h2>
            </div>
            <div className="contact_body">
              <div className="contact_content">
                <p>If you would like to speak to me about some potential work, some of the projects I have done, or my experience in developing, simply drop me a message. I'm currently available for work, looking to start my first programming venture.</p>
              </div>
              <div className="contact_form">
                <address>
                  <a href="mailto:skye.grossman@gmail.com"><img src={ELogo} height="50px"/>Email</a>
                </address>
                <a href="https://www.linkedin.com/in/skye-grossman-62039521b/"><img src={LLogo} height="50px"/>Linkedin</a>
                <a className="github" href="https://github.com/Skye967"><img src={GLogo} height="46px"/>Github</a>
              </div>
            </div>
          </div>
      </div>
      
  </html>
  );
}

export default App;
