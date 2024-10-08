import React from 'react'
import Marquee from "react-fast-marquee";
import './Skill.css'
import js from '../Image/js.png'
import html from '../Image/html.png'
import css from '../Image/css.png'
import bootstrap from '../Image/bootstrap.png'
import Jquery from '../Image/Jquery.png'
import Sql from '../Image/Sql.png'
import node from '../Image/node.png'
import react from '../Image/logo192.png'
import Mongo from '../Image/mongodb-icon-1.svg'
import Git from '../Image/Git.png'

const Skills = () => {

  return (
    <div className='Main-con vh-100'>
      <h3>Skills</h3>
      
      <Marquee direction="left" delay={3} pauseOnHover="false" speed={100} >
      <div className='image-group'>
        <div className='image'>
          <img src={js} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>JavaScript</p>
        </div>
        <div className='image'>
          <img src={html} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>HTML</p>
        </div>
        <div className='image'>
          <img src={css} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>CSS</p>
        </div>
        <div className='image'>
          <img src={bootstrap} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>BOOTSTRAP</p>
        </div>
        <div className='image'>
          <img src={Jquery} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>jQuery</p>
        </div>
      </div>
      <div className='image-group'>
       
        <div className='image'>
          <img src={Sql} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>SQL</p>
        </div>
        <div className='image'>
          <img src={node} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>Node js</p>
        </div>
        <div className='image'>
          <img src={react} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>React</p>
        </div>
        <div className='image'>
          <img src={Mongo} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>MongoDB</p>
        </div>
        <div className='image'>
          <img src={Git} alt='' style={{ width: 60, height: 60, borderRadius: 20 }} />
          <p>GIT</p>
        </div>
      </div>
        </Marquee>
       
    </div>
  )
}

export default Skills