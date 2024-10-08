import React from 'react'

import Home from './Home'
import About from './About'
import Exprince from './Exprince'
import Skills from './Skills'
import Education from './Education'
import Contect from './Contect'

const Main = () => {

  return (
    <>
    
    <Home />
    <About />
    <Exprince />
    <Skills />
    <Education />
    <Contect />
    {/* <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Exprince' element={<Exprince />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Education' element={<Education />} />
      <Route path='/Contect' element={<Contect />} />
    </Routes> */}
  </>

  )
}

export default Main