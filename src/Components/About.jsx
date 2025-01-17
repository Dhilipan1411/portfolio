
import me from "../assets/about.jpeg";
import edu from "../assets/edu.png";

import "./About.css";

function About() {
  return (
    <div className="container">
      <section className="row about">
        <div className="col-lg-4 col-sm-12 profile_pic">
          <img src={me}></img>
        </div>
        <div className="col-lg-8 col-sm-12 para">
          <h1>So... Who am I?</h1>
          <p>
            I&apos;m a passionate and dedicated web developer, specializing in
            creating responsive, user-friendly websites and applications. With a
            strong foundation in HTML, CSS, and JavaScript, I enjoy transforming
            ideas into digital experiences that are not only functional but also
            visually appealing. My journey in web development has been driven by
            a love for problem-solving and a commitment to continuous learning.
            Whether it s crafting a sleek, modern website or developing a
            complex web application, I approach each project with creativity,
            precision, and a keen eye for detail. When I&apos;m not coding, I enjoy
            exploring new technologies and enhancing my skills to stay ahead in
            this ever-evolving field. I&apos;m excited to collaborate on projects
            that challenge me to grow and make a meaningful impact through
            technology.
          </p>
        </div>
      </section>
      <section className="row edu">
        <div className="col-lg-6 col-md-6 col-sm-12 edu-det">
          <h1>What i&apos;ve done?</h1>
          <p>
            Hello! I&apos;m Dhilipan, a web developer with a solid educational
            foundation in Information Technology.
            <span className="highlight">
              I completed my 10th and 12th standards at Nadar saraswathi Higher
              Secondary School in theni, where I secured 64% and 55%,
            </span>
            respectively. Following my school education,
            <span className="highlight">
              I pursued a Bachelor of Science in Information Technology at Hajee
              Karutha Rowther Howdia College in Uthamapalayam, graduating with
              60%.
            </span>
            My academic journey has provided me with a strong understanding of
            technology, which I now apply in my web development projects.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 logo">
          <img src={edu}></img>
        </div>
      </section>
      <section className="row certificates">
        <h1>Now ,What i have?</h1>
        <div className="col-lg-6 col-sm-12 col-md-12 left">
          <h6>Full Stack Web Development Course</h6>
          <p> Edureka Learning Center</p>
          <p>
            Successfully completed an intensive Full Stack Web Development
            course at Edureka Learning Center. This course equipped me with a
            comprehensive understanding of front-end and back-end development,
            covering technologies like HTML, CSS, JavaScript, React, Node.js,
            and databases
          </p>
          <button className="btn btn-success">
            <a
              href="https://drive.google.com/file/d/1T0ih3De6xsbwJi7QwViR3aL2CuLIU-Nm/view?usp=drivesdk"
              target="_blank"
            >
              Course Complition Certificate
            </a>
          </button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 right">
          <h6>Internship: Full Stack Developer</h6>
          <p> Edureka Learning Center</p>
          <p>
            Completed a 1-month internship as a Full Stack Developer at Edureka
            Learning Center. During this internship, I applied my learning to
            real-world projects, honing my skills in building and deploying web
            applications from start to finish. This hands-on experience
            reinforced my ability to work with both the front-end and back-end
            of web technologies, contributing to successful project outcomes.
          </p>
          <button className="btn btn-success">
            <a
              href="https://drive.google.com/file/d/1SzN_dRtUXNZ_3TqgsRP00nKIGQj2Ts7R/view?usp=drivesdk"
              target="_blank"
            >
              Internship Certificate
            </a>
          </button>
        </div>
      </section>
      <footer className="bg-dark text-white text-center py-3 ">
        <h5>
          I have also developed one project named zomatoo during internship
        </h5>
        <p>
          <a href="/Projects">Learn More</a> about my project.
        </p>
        <ul className="contact-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/dhilipan-n-69a552317/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_avg_thor/" target="_blank">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Dhilipan1411/" target="_blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:dhilipan1411@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>&copy; 2024 Dhilipan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
