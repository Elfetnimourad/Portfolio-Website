import './About.css'

function About() {
  return (
    <section className="about container">
      <h2 className="title text-center">About Me</h2>
      
      <p className="description">
        Hi, I’m <span className="highlight">RADI</span>, a self-taught 
        <strong> Frontend Developer</strong> passionate about crafting modern, 
        user-friendly, and high-performance web applications.  
        My journey started from curiosity and quickly grew into a deep passion 
        for <strong>coding, problem-solving,</strong> and building interactive 
        digital experiences.  
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
    </section>
  )
}

export default About
