import React, { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'
import {AuthContext} from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'
import {DeleteBlog} from "../helpers/firebase"

const Details = () => {

  const navigate = useNavigate()
  const {detail} = useContext(BlogContext)
  const {currentUser} = useContext(AuthContext)
  const {setDetail} = useContext(BlogContext)
  console.log(detail.id)

 const handleDelete = (id)=>{
  DeleteBlog(id)
  console.log(id)
  navigate("/dashboard")
}

const handleUpdate = (id, title, image, content, date, email)=>{
  setDetail({id, title, image, content, date, email})
  navigate("/update")

}




  return (

  <div>
    <div className='detail_box'>
      <img src={detail.image} alt="" />
      <h3>{detail.title}</h3>
      <p className='detail_box_content'>{detail.content}</p>
      <p>{detail.date}</p>
      {/* <p>{detail.email}</p> */}
      <p> author : {detail.email}</p>
    </div>
   
   {/* {  currentUser.email===detail.email ? (
      <div>

<button onClick={()=>handleUpdate(detail.id, detail.title, detail.image, detail.content,detail.date, detail.email)}  type="button" class="btn btn-primary btn-sm m-2">UPDATE</button>
<button onClick={()=>handleDelete(detail.id)} type="button" class="btn btn-secondary btn-sm">DELETE</button>
      
      </div>
   ):(null)} */}


<button onClick={()=>handleUpdate(detail.id, detail.title, detail.image, detail.content,detail.date, detail.email)}  type="button" class="btn btn-primary btn-sm m-2">UPDATE</button>
<button onClick={()=>handleDelete(detail.id)} type="button" class="btn btn-secondary btn-sm">DELETE</button>
    

  </div>
  )
}

export default Details