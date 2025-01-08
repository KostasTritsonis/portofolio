import React from 'react';
import './Hero.css'
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../Context/Context';


const Hero = () => {
    const {theme,toggleTheme} = useTheme();
    const [iconFacebook,iconGithub,iconLinkedIn,iconTheme] = theme === 'light' ?
    [facebookLight,githubLight,linkedinLight,sun] :
    [facebookDark,githubDark,linkedinDark,moon];

  return (
    <div className='hero'>
        <div className='hero-right'>
            <img src={heroImg} alt="Profile picture" />
            <img className='colorMode' src={iconTheme} alt="" onClick={toggleTheme}/>
        </div>
        <div className='hero-left'>
            <h1>KONSTANTINOS <br /> TRITSONIS</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://www.facebook.com/kwstas.tritsonis" aria-label="facebook" target='_blank'>
                <img src={iconFacebook} alt="" /></a>
                <a href="https://github.com/KostasTritsonis" aria-label="github" target='_blank'>
                <img src={iconGithub} alt="" /></a>
                <a href="https://www.linkedin.com/in/kostantinos-tritsonis-637522214/" aria-label="linkedin" target='_blank'>
                <img src={iconLinkedIn} alt="" /></a>
            </span>
            <p>With a passion for developing modern apps</p>
            {/*<a href={CV} download>
                <button className='hover' >Resume</button>
            </a>*/}
        </div>
    </div>
  )
}

export default Hero