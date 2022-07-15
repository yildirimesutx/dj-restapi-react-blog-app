import {createContext, useState} from "react"
import { } from "../helpers/ToastNotify";


export const BlogContext = createContext()

const url = "http://127.0.0.1:8000/"

const BlogContextProvider = (props) => {


    let value={
        
    }

return(
    <BlogContextProvider value={{value}}>
        {props.children}
    </BlogContextProvider>
    )
}

export default BlogContextProvider

