import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Profile = () => {

  const {currentUser}=useContext(AuthContext)
  return (
    <div>


 <div style={{margin:"5rem auto"}}>
{currentUser?.photoURL ? ( <img src={currentUser?.photoURL} alt=""
             style={{borderRadius:"50%", width:"10rem",height:"10rem"}}
             /> ):(<Avatar  style={{borderRadius:"50%", width:"10rem",height:"10rem"}} src="/broken-image.jpg" />)}
 </div>
 <p style={{fontSize:"3rem"}}>User Email: {currentUser?.email}</p>
    </div>
  )
}

export default Profile