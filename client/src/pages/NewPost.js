import React, { useContext, useState } from 'react'
import {Box, Stack,TextareaAutosize, Button } from '@mui/material/';
import TextField from '@mui/material/TextField';
import blogImg  from "../assets/blok.png"

import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../contexts/BlogContext';



const NewPost = () => {

  const [title, setTitle] = useState()
  const [image, setImageUrl]= useState()
  const [content, setContent]= useState()
  const [date, setDate]= useState()
  const [user, setUser]= useState()
  const navigate = useNavigate()

  const {AddContent} = useContext(BlogContext);

const handleFormSubmit = (e)=>{
      e.preventDefault()
      console.log(title, image, content);
      AddContent(title, content, image, date, user)
      navigate("/")
}

  return (
          <div  style={{backgroundImage: "url(https://picsum.photos/1600/900/)", backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"93vh", marginTop:"0px", padding:"40px"}}>
        
          <div style={{ border:"solid white", width:"60ch", margin:"auto", backgroundColor:"white", borderRadius:"10px"}}>
          <img style={{margin:"30px"}} className='imgBlog' src={blogImg} alt="" />
        <h2 style={{margin:"10px", fontFamily: "'Girassol', cursive"}}> ── New Blog    ── </h2>
       <Box style={{backgroundColor:"white", padding:"20px"}} >
       
           <form onSubmit={handleFormSubmit}>
           <Stack direction="column" textAlign="center" justifyContent="center"
            alignItems="center">

           <TextField id="outlined-basic" label="Title" variant="outlined" sx={{ m: 1, width: '50ch'}} required onChange={(e)=>setTitle(e.target.value)} />

           <TextField id="outlined-basic" label="Image URL" variant="outlined" required sx={{ m:1, width: '50ch'}} onChange={(e)=>setImageUrl(e.target.value)}/>

           <TextareaAutosize
               aria-label="minimum height"
               minRows={8}
               placeholder="Content" required
               style={{ width: '58ch', m:2 }}
               onChange={(e)=>setContent(e.target.value)}
            />

        <Button type="submit" variant="contained" sx={{ m:3, width: '55ch'}}>SUBMIT</Button>

             </Stack>
            </form>
           </Box>
          </div>
        </div>
  )
}

export default NewPost