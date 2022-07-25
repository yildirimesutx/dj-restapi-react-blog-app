
import {createContext, useEffect, useState} from "react"
// import {toastErrorNotify} from "../helpers/ToastNotify";
// import axios from 'axios';


export const BlogContext = createContext()

const url = "http://127.0.0.1:8000/"

const BlogContextProvider = (props) => {

    const [isLoading, setIsLoading] = useState()
    const [contentCard, setContentCard] = useState()
    // const [users, setUsers] = useState([]);

// const getBlogs = ()=>{
// try{
//   const res = await axios.get(`${url}blog/api/`) 
//   setContentCard(res.data)
//   console.log(res);
// }
// catch(error){
//     toastErrorNotify(error.message)
// }

// fetch(`${url}blog/api/`)
// .then((response)=>response.json())
// .then(data=>{
// console.log(data)
// setContentCard(data)
// setIsLoading(false)
// }).catch((err)=>console.log(err))
// }

// useEffect(()=>{
//     setIsLoading(true)
//     getBlogs()

// }, [])


<<<<<<< HEAD

const AddContent = (title, content, image, date,user)=>{

    // bu bölümü drf postman api, post
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=moobGkvuEU6jPPxI6HgO0khWkeHgqZ0IPC3rWxeWJdXQ7gd4x96e1ZF7Eoem7yt9");
  
  const raw = JSON.stringify({
    "title": title,
    "content": content,
    "image": image,
    "user": user,
    "date": date,
    "post_view": 0,
    "post_like": 0,
    "comment_number": 0
  });
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/blog/api/", requestOptions)
    .then(response => response.text())
    .then(result =>{ 
      console.log(result)

  })
    .catch(error => console.log('error', error));
  
  
  }
  











=======
>>>>>>> 2e51189e03b5717547726b951557f573b51f90b4
useEffect(() => {
fetch(`${url}blog/api/`)
.then((response)=>response.json())
.then(data=>{
console.log(data)
setContentCard(data)
}).catch((err)=>console.log(err))

  }, []);

<<<<<<< HEAD





=======
>>>>>>> 2e51189e03b5717547726b951557f573b51f90b4




    let value={
        contentCard,
        isLoading,
<<<<<<< HEAD
        AddContent
=======
>>>>>>> 2e51189e03b5717547726b951557f573b51f90b4
      
       
    }

return(
    <BlogContext.Provider value={value}>
        {props.children}
    </BlogContext.Provider>
    )
}

export default BlogContextProvider

