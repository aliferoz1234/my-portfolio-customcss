import React from 'react';
import "../app/styles/skills.css"


const Skills = () => {
  return (
    <div id="skills" className='skills-container'>
      <div className='skills-grid'>
      <div data-aos="zoom-in-up" className='skills-left'>
        <h2 className='skills-heading'>Technologies I work with</h2>
        <p className='skills-text'>I have a solid expertise in web development, specializing in HTML, CSS and Javascript.
          My experience extends to using framework like React and Next.js to create dynamic and user-friendly applications.I'm also profecient
          in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my 
          skill set and contribute effectively to projects.
        </p>
        </div>
        <div className='skills-right'>
          <div className='skills-icons-grid'>
          <div className='skills-space'>
            <h2 data-aos="zoom-in-up">Typescrilpt</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='skills-space'>
            <h2 data-aos="zoom-in-up">Tailwind</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
