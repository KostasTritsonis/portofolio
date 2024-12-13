import React from 'react'
import './Skills.css'
import checkmarkdark from '../../assets/checkmark-dark.svg'
import checkmarklight from '../../assets/checkmark-light.svg'
import SKillList from '../SkillList/SKillList'
import { useTheme } from '../Context/Context';

const Skills = () => {

  const {theme,toggleTheme} = useTheme();

  const checkmarkIcon = theme === 'light' ? checkmarklight : checkmarkdark;

  return (
    <div className='skills'>
        <h1>EDUCATION - SKILLS</h1>
        <div className="education">
        <SKillList src={checkmarkIcon} skill=" MSc Degree in Computer Science & Engineering University of Ioannina" />
        </div>
        <hr />
        <div className='dev-skills'>
            <SKillList src={checkmarkIcon} skill="HTML" />
            <SKillList src={checkmarkIcon} skill="CSS" />
            <SKillList src={checkmarkIcon} skill="JavaScript" />
            <SKillList src={checkmarkIcon} skill="Node" />
            <SKillList src={checkmarkIcon} skill="React" />
            <SKillList src={checkmarkIcon} skill="Python" />
            <SKillList src={checkmarkIcon} skill="Java" />
            <SKillList src={checkmarkIcon} skill="Git" />
        </div>
        <hr />
        
    </div>
  )
}

export default Skills