
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


useEffect(() => {
fetch(`${url}blog/api/`)
.then((response)=>response.json())
.then(data=>{
console.log(data)
setContentCard(data)
}).catch((err)=>console.log(err))

  }, []);





    let value={
        contentCard,
        isLoading,
      
       
    }

return(
    <BlogContext.Provider value={value}>
        {props.children}
    </BlogContext.Provider>
    )
}

export default BlogContextProvider

