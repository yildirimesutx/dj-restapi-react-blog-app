import {createContext, useState} from "react"
import { } from "../helpers/ToastNotify";



export const AuthContext = createContext()

const url = "http://127.0.0.1:8000/"

const AuthContextProvider = (props) => {

const [currentUser, setCurrentUser] = useState();


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
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    
          navigate("/login")

    }

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
      
    //   fetch(`${url}auth/login/`, requestOptions)
    
         fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .then(result => setCurrentUser(result))
        .catch(error => console.log('error', error));
      
      
        navigate("/")
      
      }




























    let value={
        currentUser,
        createUser,
        signIn,
        // logOut,
        // myKey
    }
    return (
      <AuthContext.Provider value={value}>
           {props.children}
      </AuthContext.Provider>

    )


}
export default AuthContextProvider;




