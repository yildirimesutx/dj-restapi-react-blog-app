import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import NewBlog from './NewBlog';
import {  useFunc } from '../helpers/firebase';
import loading from "../assets/loading.gif"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { AccountCircle } from "@mui/icons-material";
import { BlogContext } from "../contexts/BlogContext";
// import {ChatBubbleOutlineOutlinedIcon} from "@mui/icons-material";
// import IconButton from '@mui/material/IconButton';
// import {email} from    "../pages/Login"



const Dashboard = () => {

  const {isLoading, contentCard} = useFunc()
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);

  const {setDetail} = useContext(BlogContext)
  console.log(contentCard);

  const handleDetails =(id, title, image, content, date, email)=>{
      setDetail({id, title, image, content, date, email})
      navigate("/details")
  }



  return (
    <div className='das_main'>
      <h1 style={{color:"white"}}> ──  Dashboard  ── </h1>
      <div className='blog_card'>
      {isLoading ? (
        <img src={loading} alt="loading" className='loading' />
      ):
      contentCard?.length=== 0 ?
      
      ( <p style={{color:"black",fontSize:"20px"}}>Gösterilecek blog yazısı yok, haydi bir yazı yazalım..</p>
      ):(
       
        contentCard?.map((item,index)=>(
          <div className='card' key={index} >
           <Card className="card_mui"  >
          <img className="brand_logo" src={item.image} alt={item.title}  onClick={()=>handleDetails(item.id, item.title, item.image, item.content, item.date, item.email)}/>
        <CardContent>

        <h5 className="brand_title" >{item.title}</h5>
         <div className="content">
          <Typography >
          {item.content} 
          </Typography>
          </div>
        </CardContent>
        <Typography variant="body2" color="text.secondary">
        {item.date}
          </Typography>

         <CardContent>
         <Typography variant="body2" color="text.secondary">
         <AccountCircle/>{item.email}
          </Typography>


         </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
          </div>
        ))
      
      )}
      </div>
    </div>
  );
}

export default Dashboard