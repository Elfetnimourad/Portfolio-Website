import './About.css';
import { motion } from 'framer-motion';
function About() {
  return (
    <motion.section className="about container" initial={{width:0}} animate={{width:'100%'}} exit={{x:'100%',transition:{duration:0.3,type:'tween'}}}>
      <h2 className="title text-center">About Me</h2>
      
      <p className="description">
        Hi, I’m <span className="highlight">RADI</span>, a self-taught 
        <strong> Frontend Developer</strong> passionate about crafting modern, 
        user-friendly, and high-performance web applications.  
        My journey started from curiosity and quickly grew into a deep passion 
        for <strong>coding, problem-solving,</strong> and building interactive 
        digital experiences.  You can also{" "}
    <a href={'./Elfetni-Mourad-FlowCV-Resume-20250908 (1).pdf'} download className="cv-link">
      📄 Download my CV
    </a>.
      </p>

      <p className="description">
        I continuously challenge myself to explore new technologies, sharpen my 
        skills, and deliver clean, scalable, and maintainable solutions.  
      </p>

      <h3 className="subtitle">Languages & Technologies</h3>
      <div className="skills-grid">
        <span>HTML</span>
        <span>CSS / SASS</span>
        <span>JavaScript (ES6+)</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Git & GitHub</span>
      </div>
    </motion.section>
  )
}

export default About
