import  { useEffect, useState } from 'react'
import './UserQuery.css'
import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.min.css"
// import Table from 'react-bootstrap/Table';




const UserQuery = () => {
    const[user,setUser]   =useState([])

    useEffect(()=>{
        axios.get("https://portfolio-backend-61fm.onrender.com/userData")
        .then((user)=>{ setUser(user.data)})
        .catch((error)=>{console.log(error)})
      }, [])
      
  return (
    <div className='main'>
        <h3>USER'S</h3>
        <div className='cont1'>
        <table className='table' >
        <thead>
            <tr className='head'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Query</th>
            </tr>
        </thead>
        <tbody>
            {user.map(user=>{

              return  <tr>
                    <th>{user.userName}</th>
                    <th>{user.userEmail}</th>
                    <th>{user.userNumber}</th>
                    <th>{user.userMsg}</th>
                </tr>
            })}
        </tbody>
    </table>
    </div>
</div>

  )
}

export default UserQuery
