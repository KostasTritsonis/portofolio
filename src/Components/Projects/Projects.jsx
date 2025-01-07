import React from 'react'
import './Projects.css'
import movie from '../../assets/movie.png'
import compiler from '../../assets/compiler.png'
import enginuity from '../../assets/enginuity.svg'
import lift from '../../assets/fitlift.png'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
      <h2>FRONT END</h2>
      <div className='project'>
        <ProjectCard src={enginuity} link="https://matina-snowy.vercel.app/" name="Enginuity" title="English Class Website"/>
        <ProjectCard src={lift} link="" name="FitLift" title="Gym Website"/>
      </div>
      <h2>BACK END</h2>
      <div className='project'>
        <ProjectCard src={movie} className='movie' link="https://github.com/KostasTritsonis/information_retrieval" name="MSearcher " title="Movie Search App"/>
        <ProjectCard src={compiler} link="https://github.com/KostasTritsonis/compiler-UI" name="Compiler" title="Compiler UI App"/>
      </div>
        
    </div>
  )
}

export default Projects