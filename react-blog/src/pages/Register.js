
import  "./Login.css"
import blogImg  from "../assets/blok.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../helpers/firebase'

const Register = () => {


const [username, setUserName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [password2, setPassword2] = useState()
const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault()
  createUser(email, password, navigate, username, password2)
  console.log(email, password,  username, password2);
}




return (
  <div className='main'>
    <div className='container'>
   <div className='loginCard'>    
   <img className='imgBlog' src={blogImg} alt="" />

   <form onSubmit={handleSubmit}>

   <div class="mb-3">
    <input type="text"   className="form-control mt-5 mb-4"  id="exampleInputusername" aria-describedby="emailHelp" placeholder='Username' onChange={(e)=>setUserName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <input type="email"   className="form-control mt-5 mb-4"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
   
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3">
   
   <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password again' onChange={(e)=>setPassword2(e.target.value)}/>
 </div>


  <input
            type="submit"
            className="btn btn-primary form-control mt-5"
            value="Register"
            
            // onSubmit={handleSubmit}
          />

</form>

<button className='btn btn-primary form-control mt-3'>Continue with Google</button>

</div> 
</div>
</div>
)
}
export default Register