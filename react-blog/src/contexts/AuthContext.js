import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

// her yerden çağırabilmek için export ediyoruz
export const AuthContext = createContext()


const AuthContextProvider = ({children}) =>{
const [currentUser,setCurrentUser] = useState()

useEffect(() => {
  userObserver(setCurrentUser)
}, [])

// yeni bir kullanıcı geldiğnde useEffect ile tutuyoruz
// context yapısı ile tuttuğumuz state nerede kullanmak istiyorsak o componenti sarmarlıyoruz, authentication işlemi olduğundan dolayı  tüm sayfalarda kullanılması için genel olarak yapıyoruz sarmarlama işlemini app.jsde yapıyoruz. app.js içindeki sarmarladığımız componente ve bu componentin tüm childrenlarında proplar kulanılmaktadır




    return (
   <AuthContext.Provider value={{currentUser}}>
{/* yukarıda belirtilen value sabit olarak gelmekte aşağıda belirtilen children olarak sarmarlanan tm componentlere value değeri gönderilmiş oluyor. value içerisine yazdığımız state, func lar istenilen tüm sayfalarda kullanılabilir. kısacası value ortak kullanılmak istenilenler  */}
     {children}


   </AuthContext.Provider>
    )
}

export default AuthContextProvider;