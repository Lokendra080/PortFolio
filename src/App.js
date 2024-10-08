
import './App.css';

import About from './Component/About'
import Exprince from './Component/Exprince'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Contect from './Component/Contect'
import NavBar from './Component/NavBar'
import { Routes, Route } from 'react-router-dom'
import Main from './Component/Main';
import UserQuery from './Component/UserQuery';


function App() {
  return (


    <>
    <NavBar />
    
    <Routes>

      <Route path='/' element={<Main/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Exprince' element={<Exprince />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Education' element={<Education />} />
      <Route path='/Contect' element={<Contect />} />
      <Route path='/UserQuery' element={ <UserQuery /> } />
    </Routes>
    </>

  );
}

export default App;
