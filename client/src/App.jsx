
import './App.css';
import selfie from "./images/selfie.png";
import bioImage from "./images/bio.JPG";
import sgLogo from "./images/sg.png";
import ELogo from "./images/email.png";
import LLogo from "./images/linkedin.png";
import GLogo from "./images/github.png";

function App() {
  return (
  <html id="body">
    <div className="body">
      <div className="navbar">
        <div className="name">
          <img src={sgLogo} height="150" width="auto" alt="Skye's logo" />
          <h2>Skye Grossman</h2>
        </div>
        <div className="links">
            <a href="#bio" >About</a>
            <a href="#projects">Projects</a>
            <a href="https://docs.google.com/document/d/1yiERknxvQLEHC88zE83m0mrzPH7XdRkdJhFOFz-iW2g/edit?usp=sharing">Resume</a>
            <a href="#contact">Contact</a>
        </div>
      </div>
        <div className="intro">
          <div className="intro_header">
            
          </div>
          <div className="intro_body">
              <img src={selfie} height="400" width="auto" alt="Skye's selfie" />
            <div className="intro_content">
              <h2>Full stack web developer with experience in Javascript, Python, Java, HTML, CSS, SQL, MongoDB, Flask, STS, and React. </h2>
            </div>
          </div>
      </div>
        <div className="bio" id="bio">
          <div className="bio_header">
            <h1>About</h1>
          </div>
          <div className="bio_body" >
            <div className="bio_content">
              <h4>  Critcal Thinker, Mythotical, Idealist, and Jack of All Trades. <span>Whatever Skye does, he does with heart and integrity.</span> Native of Hawaii growing up in a remote area of Maui, he had to work hard and earn everthing he has. Growing up in a rural area he had to learn trade skills out of necessity, <span>his vast skill set, experience, and work ethic make him an asset</span> to anyone he works with. After much thought and deliberation about the future, Skye decided to try his hand at coding knowing it was unlike anything that he had done before. He practiced coding every chance he got, learning something new everyday made him hunger for more. Finally after months of practice, he was ready to make a career change. He <span>signed up with Coding Dojo</span> one the most pristigious coding bootcamps in the United States. Consistantly a top performer and always helping out where he could, made the most of his time there. Now he is ready for his first programming venture.
              </h4>
            </div>
            <div className="bio_image">
              <img src={bioImage} height="600" width="auto" alt="Skye walking towards a waterfall." />
            </div>
          </div>
        </div>
        <div  id="projects" className="projects">
          <div  className="projects_section">
            <h1>Projects</h1>
          </div>
          <div className="code">
            <h2>I enjoy working with</h2>
            <div className="code_content">
              <div><p>Python</p><p>Java</p><p>HTML</p><p>CSS</p><p>Javascript</p><p>Flask</p><p>Spring</p><p>Node.js</p><p>React.js</p></div>
              <div><p>Express.js</p><p>Bootstrap</p><p>AWS</p><p>Mongoose</p><p>MongoDB</p><p>MySQL</p><p>AJAX</p><p>Maven</p></div>
              <div><p>jQuery</p><p>Angular</p><p>Mongoose.js</p><p>Axios</p><p>MySQL</p><p>MongoDB</p></div>
              <div><p>Postman</p><p>VScode</p><p>SpringToolSuite</p><p>MySQLWorkbench</p></div>
              <div></div>
            </div>
          </div>
          <div className="project">
            <div className="project_header">
              <h2>Learn Cooking Essentials</h2>
            </div>
            <div className="project_content">
              <div className="project1_images">
              </div>
              <div className="project_info">
                <ul>
                  <li>Created this website using Python, Flask, and MySql.</li>
                  <li>Utilized HTML to add an embeded video and an article on common cooking mistakes and a link to the registration page</li>
                  <li>Registration and Login was created with an email and password validator using Regex and utilized Bcrypt to create a hashed password. Once validated the new User is added to the database via MySql query.</li>
                  <li>Percentage of completion was created by using a MySql query for all the lessons completed for that category then a simple math equation to find the percentage of completion. User image uploads are added to the dashboard by first querying for them then utlizing jinja2 to loop through making image tags for all images.</li>
                  <li>Each lesson has a recipe and an embeded video to follow. Image upload was made by first adding the image to a local folder then saving the file path to that image in the database.</li>
                  <li>Made one to many relationship between Users and Images, One to one relationshipt between Lessons and Images</li>
                </ul>
                <a className="github" href="https://github.com/Skye967/Projects/tree/branching/CookingProject"><img src={GLogo} height="46px"/>Github/CookingEssentials</a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_header">
              <h2>Professional Advice</h2>
            </div>
            <div className="project_content">
              <div className="project2_images">
                <div className="project_images1">
                </div>
                <div className="project_images2">
                </div>
              </div>
              <div className="project_info">
                <ul>
                  <li>Created this App with Spring Tool Suite, Java, and MySql</li>
                  <li>One to many relationships between Users and Questions, Answers, and Comments. Many to many relationship between Users and Professions. One to many relationships between Questions and Answes, and Comments. Many to many relationship between questions and tags. One to many relationship between Answers and Comments</li>
                  <li>Regestration and Login was made with Bcrypt to hash and check passwords</li>
                  <li>Utlized JPA query and algorythims to pull list of User's Professions, search Questions, add Questions, Tags, Answers, and Comments, while querying the database before adding.</li>
                  <li>Used JSP Form tags and C tags to perform logic and take and display information</li>
                </ul>
                <a className="github" href="https://github.com/Skye967/Projects/tree/branching/ProAdviceProject"><img src={GLogo} height="46px"/>Github/ProfessionalAdvice</a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_header">
              <h2>Mario Clone</h2>
            </div>
            <div className="project_content">
              <div className="project3_images">
                <div className="project_images1">
                </div>
                <div className="project_images2">
                </div>
              </div>
              <div className="project_info">
                <ul>
                  <li>Created the background by using javascript to create image tiles from an image board by making a class that takes in pixels as coordinates then setting the height and width. Using a JSON file to take the image and set how many image tiles long and wide then a function to draw an image of the whole background.</li>
                  <li>Mario was made by attaching a javascript class to an image of Mario that has different functions to control jumping and gravity. And the image of mario is redrawn to the new coordinates as the jump progresses.</li>
                  <li>Made Jump by setting  gravity as a constant that moves mario a certain amount of pixels per milasecond, then jump has an initial velocity that is moving Mario a certain amount of pixels that decreases over time until it's back at gravity's constant.</li>
                </ul>
                <a className="github" href="https://github.com/Skye967/Projects/tree/branching/MarioProject"><img src={GLogo} height="46px"/>Github/MarioClone</a>
              </div>
            </div>
          </div>
          <div id="contact" className="contact">
            <div className="contact_header">
              <h2>Let's work together!</h2>
            </div>
            <div className="contact_body">
              <div className="contact_content">
                <p>If you would like to talk to me about some potential work, some of the projects I have done, or my experience in developing. Simply drop me a message, I'm currently available for work, looking to start my first programming venture.</p>
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
      </div>
  </html>
  );
}

export default App;
