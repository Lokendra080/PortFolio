import React from 'react'
import './Exprince.css'

const Education = () => {
  return (
    <div className='container vh-100 '>
                <h1>Education</h1>
            <div className='Main-container  '>
                <div className='left-container'>
                    <div className='Title'>
                        <h5 style={{ color: "#32de84" }}>jun 2020 july-2023</h5>
                    </div>
                    <div className='Education1'>
                        
                        <div className='Heading'>
                            <h3>BCA</h3>
                            <p>Jaipur National University</p>
                        </div>
                    </div>

                </div>
                <div className='right-container'>
                    <div className='Title'>
                        <h5 style={{ color: "#32de84" }}>jan 2023 Jan-2024</h5>
                    </div>
                    <div className='exprience1'>
                        <div className='Heading'>
                            <h3>FullStack Developer</h3>
                            
                            <p>MERN Technology ( from AlmaBetter )</p>
                            {/* <p>AlmaBetter</p> */}
                        </div>
                    </div>
                </div>


            </div>

            
            <hr/>
        </div>
  )
}

export default Education