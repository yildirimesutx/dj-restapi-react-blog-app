import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

// her yerden çağırabilmek için export ediyoruz
export const AuthContext = createContext()




const AuthContextProvider = ({children}) =>{
const [currentUser,setCurrentUser] = useState()

const signIn = async (username, email, 
  password, navigate) =>{

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "csrftoken=fZzRS5Ro6XJoEtDw0XaEWQcNv3RXQ39YCLYMvmKLsdH60xYOY5i4hnWzS4TnXn8R; sessionid=w662tjuvmi3kdd70w11n2oqvbxpe3qls");

var raw = JSON.stringify({
  "username": username,
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
  .then(response => response.text())
  .then(result => setCurrentUser(result))
  // .then(result => (result))
  .catch(error => console.log('error', error));

  
  navigate("/dashboard")

}





useEffect(() => {
  userObserver(setCurrentUser)
}, [])

// yeni bir kullanıcı geldiğnde useEffect ile tutuyoruz
// context yapısı ile tuttuğumuz state nerede kullanmak istiyorsak o componenti sarmarlıyoruz, authentication işlemi olduğundan dolayı  tüm sayfalarda kullanılması için genel olarak yapıyoruz sarmarlama işlemini app.jsde yapıyoruz. app.js içindeki sarmarladığımız componente ve bu componentin tüm childrenlarında proplar kulanılmaktadır




    return (
   <AuthContext.Provider value={{currentUser,signIn }}>
{/* yukarıda belirtilen value sabit olarak gelmekte aşağıda belirtilen children olarak sarmarlanan tm componentlere value değeri gönderilmiş oluyor. value içerisine yazdığımız state, func lar istenilen tüm sayfalarda kullanılabilir. kısacası value ortak kullanılmak istenilenler  */}
     {children}


   </AuthContext.Provider>
    )
}

export default AuthContextProvider;