import React from 'react'

const ProjectCard = ({src,link,name,title}) => {
  return (
    <div>
        <a href={link} target='_blank'><img src={src} alt="" /></a>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default ProjectCard