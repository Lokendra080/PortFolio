import React from 'react'
import './About.css'

import Profile from '../Image/Profile-Img.jpg'

const About = () => {
  return (
    <div className='Main-Container vh-100'>
        <div className='Left-container'>
            <h2 style={{color: "#32de84"}}>Who I AM ?</h2>
            <p>My name is Lokendra Kumar. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.</p>
            </div>
        <div className='Right-container'>
            <div className='About-img'>
                <img src={Profile} alt='Profile-img' className='img' />
             </div>
        </div>
      
    </div>
  )
}

export default About
