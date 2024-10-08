
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "../Component/Contect.css"
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';



const Contect = () => {
  
  const [userData,setUserData] =useState({
    userName:"",
    userEmail:"",
    userNumber:"",
    userMsg:""
    
  })

  const addData=(data)=>{
    const {name,value}=data.target
  
    setUserData(()=>{
      return{
        ...userData,
        [name]:value
      }
    })
  }

//sending register data to backend
const sendData = async(e)=>{
  e.preventDefault(); 
  const {userName, userEmail, userNumber, userMsg} = userData;
    // console.log(userData)
  const res= await fetch("https://portfolio-backend-61fm.onrender.com/xyz", {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    
    body:JSON.stringify({userName, userEmail, userNumber, userMsg})
  })
  
  // const data = await res.json();
  
  if(res.status === 422  ){
    window.alert("All fields are Mendatory")
    
    
    // setUserData({...userData, userName:"",userEmail:"",userNumber:"",userMsg:""});
  }else if(res.status === 421 ) {
    window.alert('This Email  is already register')
  
  }
  else if(res.status === 201 ) {
    window.alert("Thank you for Contacting Us")
    
  }else{
    window.alert("Invalid Data")

  } 
}


  return (
    <div className='main-con '>

      <h4> Contact Us</h4>
      <div className='Compo'>
        <div className='left-side'>
          <Form className='Form' method="POST" >
            <p>If you have any questions or concerns, please don't hesitate to contact
              me. </p>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>

              <Form.Control type="text" name='userName' placeholder="name" onChange={addData} value={userData.userName} className="transparent-input"  />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="Email" name='userEmail' placeholder="email" className="transparent-input" onChange={addData} value={userData.userEmail}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number:</Form.Label>
              <Form.Control type="text" name='userNumber' placeholder="Phone Number" className="transparent-input" onChange={addData} value={userData.userNumber}/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message:</Form.Label>
              <Form.Control as="textarea" name='userMsg' className="transparent-input" onChange={addData} value={userData.userMsg}/>
            </Form.Group>
            <div className='btn'>
            <Button variant="outline-info" type="submit" className='btn-Contact' onClick={sendData}>Send Me</Button>
            </div>
          </Form>
        </div>
        <div className='side'>
          <div className='footer-icon first'>
              
              <h5><i class="fi fi-tr-at"></i> lokendra.kumar08022000@gmail.com</h5>
            <h5><i class="fi fi-ts-circle-phone"></i> +91 7428341336 </h5>
            <h5><i class="fi fi-tr-land-layer-location"></i> Govindpuri Kalkaji  Delhi-110019</h5>


          </div>
          <div className='footer2'>

          <Nav.Link href='https://github.com/Lokendra080?tab=repositories' target='blanck'><h1>
              <i class="fi fi-brands-github"  ></i></h1></Nav.Link>

            <Nav.Link href='https://www.linkedin.com/in/lokendra-kumar-41715725a/' target='blanck'><h1><i class="fi fi-brands-linkedin"></i></h1></Nav.Link>
            <h1><i class="fi fi-brands-facebook"></i></h1>
            <h1><i class="fi fi-brands-instagram"></i></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect
