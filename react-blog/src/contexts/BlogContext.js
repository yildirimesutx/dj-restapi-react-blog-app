import { createContext, useState } from "react";

import { useFunc, EditBlog, AddContent} from "../helpers/firebase";

export const BlogContext = createContext()



const BlogContextProvider = ({children}) =>{
    const [detail,setDetail] = useState([])
    const [update, setUpdate] = useState()




  const updatehandler = (id, title, image, content)=>{
     setDetail(id, title, image, content)

  }


 




    return (
        <BlogContext.Provider value={{detail,setDetail, useFunc, update, setUpdate, updatehandler }}>
    
          {children}

     
     
        </BlogContext.Provider>
         )
     }
     
     export default BlogContextProvider    