import {createContext, useState} from "react"
import { toastSuccessNotify, toastErrorNotify } from "../helpers/ToastNotify";
import axios from "axios"


export const AuthContext = createContext()

const url = "http://127.0.0.1:8000/"

const AuthContextProvider = (props) => {

const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("result")) || null);
const [myKey, setMyKey] = useState();


const createUser = async (username,email, password,  password2, navigate) =>{

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "csrftoken=moobGkvuEU6jPPxI6HgO0khWkeHgqZ0IPC3rWxeWJdXQ7gd4x96e1ZF7Eoem7yt9");
        
        var raw = JSON.stringify({
          "username": username,
          "email": email,
          "password": password,
          "password2": password2
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${url}register/`, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          toastSuccessNotify("User registered successfully.Please login to continue")
          navigate("/login")

    }

const signIn = async (username, email, 
        password, navigate) =>{

          try {
            const res = await axios.post(`${url}auth/login/`, {
              username: username,
              email: email,
              password: password 
            });
            console.log(res.data.key)
           const myToken = await res.data.key
           if (myToken){
            setCurrentUser(res.data)
            setMyKey(myToken)
            sessionStorage.setItem("result",JSON.stringify(res.data))
            console.log(res.data);
            toastSuccessNotify("User logged in successfully")
            navigate("/") 
          }
          } 
          catch (error) {
            toastErrorNotify(error.message)
          }


          //aşağıda postmanden gelen fetch ile devam ettik, yukarıda axios ile yaptık 
      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Cookie", "csrftoken=fZzRS5Ro6XJoEtDw0XaEWQcNv3RXQ39YCLYMvmKLsdH60xYOY5i4hnWzS4TnXn8R; sessionid=w662tjuvmi3kdd70w11n2oqvbxpe3qls");
      
      // var raw = JSON.stringify({
      //   "username": username,
      //   "email": email,
      //   "password": password
      // });
      
      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      // };
      
      //   fetch(`${url}auth/login/`, requestOptions)
      //   //  fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
      //   .then(response => response.json())
      //   // .then(result => console.log(result))
      //   .then(result => {
      //     sessionStorage.setItem("result",JSON.stringify(result))
      //     setCurrentUser(result)
      //   })
        
      //   .catch(error => alert("Unable to log in with provided credentials.", error));
      
      //   toastSuccessNotify("User logged in successfully") 
      //   navigate("/")
      
      }

     const logOut = async (navigate) => {
      try {
         const res = await axios.post(`${url}auth/logout/`)
         if (res.status === 200) {
             setCurrentUser(false)
             setMyKey(false)
             toastSuccessNotify("User logout successfully") 
             navigate("/")          
        }
           console.log(res)
      } catch (error) {
        toastErrorNotify(error.message)
      }
       
    }




    let value={
        currentUser,
        createUser,
        setCurrentUser,
        signIn,
        logOut,
        myKey
    }
    return (
      <AuthContext.Provider value={value}>
           {props.children}
      </AuthContext.Provider>

    )


}
export default AuthContextProvider;




