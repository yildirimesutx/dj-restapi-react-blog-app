import { LineAxisOutlined } from "@mui/icons-material";
import {createContext, useEffect, useState} from "react"
import {toastErrorNotify} from "../helpers/ToastNotify";
import axios from 'axios';


export const BlogContext = createContext()

const url = "http://127.0.0.1:8000/"

const BlogContextProvider = (props) => {

    const [isLoading, setIsLoading] = useState()
    const [contentCard, setContentCard] = useState([])


const getBlogs = async ()=>{
try{
  const res = await axios.get(`${url}blog/api/`) 
  setContentCard(res.data)
  console.log(res);
}
catch(error){
    toastErrorNotify(error.message)
}





// fetch(`${url}blog/api/`)
// .then((response)=>response.json())
// .then(data=>{
// console.log(data)
// setContentCard(data)
// setIsLoading(false)
// }).catch((err)=>console.log(err))
}

useEffect(()=>{
    setIsLoading(true)
    getBlogs()

}, [])





    let value={
        contentCard,
        isLoading,
        getBlogs,
        setContentCard 
    }

return(
    <BlogContextProvider value={{value}}>
        {props.children}
    </BlogContextProvider>
    )
}

export default BlogContextProvider

