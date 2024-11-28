import React from 'react'
import Heading from './Heading'
import Card from './Card'
import "../app/styles/projects.css"


const data=[
    {
        id:0,
        title:"Countdown Timer",
        desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
        img:"/project_01.png",
        tags:["Next.JS","Node","CSS","Typescript"]  
    },
    {
        id:1,
        title:"Currency Converter",
        desc:"A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
        img:"/project_02.png",
        tags:["HTML","Node","CSS","Typescript"],
    },
    {
        id:2,
        title:"Interactive Resume",
        desc:"A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img:"/project_03.png",
        tags:["HTML","Node","CSS","Typescript"],

    }
]

const Projects = () => {
  return (
    <div id="projects" className='projects-container' data-aos="zoom-in-up">
        <Heading title="My Projects"/>
        <div className='projects-grid'>
            {data.map((el)=>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
