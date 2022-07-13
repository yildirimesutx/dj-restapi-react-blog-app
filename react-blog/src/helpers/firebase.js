// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {Register} from "../pages/Register"
import { useContext } from "react";
// import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import {Toastify} from "./toastNotify";
import axios from "axios"
import { AuthContext } from '../contexts/AuthContext';


// const { currentUser } = useContext(AuthContext);


let updateState;
// değişiklik olduğunda getBlogs ulaşabilmek için, yeni bir blog eklediğimizde sayfa render olmadan bloğun sayfada gözükmesi için getBlogs ulaşıyor, 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Xs17QMMO8vp_KPTQR_YPCBM7QLP3Ktc",
  authDomain: "blog-milestone.firebaseapp.com",
  projectId: "blog-milestone",
  storageBucket: "blog-milestone.appspot.com",
  messagingSenderId: "1070907205799",
  appId: "1:1070907205799:web:219d42af643b6e2b599382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, username, password2) =>{

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
    
    fetch("http://127.0.0.1:8000/register/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      navigate("/dashboard")





  // try {
  //   let userCredential = await createUserWithEmailAndPassword (
  //     auth, 
  //     email, 
  //     password
  //   )
  //   navigate("/dashboard")
  //   console.log(userCredential)
  // } catch (error) {
    
  // }
}

// export const signIn = async (username, email, 
//   password, navigate) =>{

//     var myHeaders = new Headers();
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

// fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
//   .then(response => response.text())
//   // .then(result => console.log(result))
//   .then(result => username1=result)
//   .catch(error => console.log('error', error));

//   console.log(username1)






//   navigate("/dashboard")












//   // try {
//   //   let userCredential = await signInWithEmailAndPassword(auth, email, password)
//   //   navigate("/dashboard")
//   //   Toastify("success")
//   //   console.log(userCredential)
//   // } catch (err) {
//   //   alert(err.message)
//   // }
// }

 

export const logOut = async (navigate) => {

        const res = await axios.post("http://127.0.0.1:8000/auth/logout/")
        if (res.status === 200) {
          Toastify("User logout successfully")
          
          // setCurrentUser(false)
          
          navigate("/dashboard")
        }
        console.log(res)
  
     
};



// kayıtlı olan user i takip ediyor ve logout olup olmadığı sayfadaki yeni kullanıcı girişini takip ediyor

//  burada belirtilen currentUser vesetCurrentuser i context yapıdan çağırıyoruz, 



// export const userObserver = (setCurrentUser)=>{
//    console.log(username1)



//   // onAuthStateChanged(auth, (currentUser) => {
//   //   if (currentUser) {
//   //     setCurrentUser(currentUser)
//   //   } else {
//   //     setCurrentUser(false)
//   //   }
//   // });
// }


// https://firebase.google.com/docs/auth/web/google-signin

export const signUpProvider = (navigate, msg)=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
   navigate("/dashboard")

   Toastify("success")

  }).catch((error) => {
     console.log(error);
  });
}




// Get a database reference


//* database veri gönderme, 
// "myblog" realtime da oluşturduğımuz linkin sonuna verdiğimiz uzantı.AddContent func nunu ilgili form func içerisine yazıyoruz


export const AddContent = (title,imageUrl, content, date, email)=>{

  // bu bölümü drf postman api, post
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "csrftoken=moobGkvuEU6jPPxI6HgO0khWkeHgqZ0IPC3rWxeWJdXQ7gd4x96e1ZF7Eoem7yt9");

const raw = JSON.stringify({
  "title": title,
  "content": content,
  "image": imageUrl,
  "user": 2,
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
    updateState()
})
  .catch(error => console.log('error', error));

// firebase database
  // const db= getDatabase();
  // const contentRef= ref(db, "myblog")
  // const newContentRef = push(contentRef)
  // set((newContentRef),{
  //   title : title,
  //   image :imageUrl,
  //   content :content,
  //   date : date,
  //   email:email,
  // })
}


// * bigi çağırma

export const  useFunc =()=>{
  const [isLoading, setIsLoading] = useState()
  const [contentCard, setContentCard] = useState()



  const getBlogs = () =>{
    // fetch ile drf api çektik
      fetch("http://127.0.0.1:8000/blog/api/")
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
        setContentCard(data)
        setIsLoading(false)
    }).catch((err) => console.log(err))
  }

  updateState = getBlogs;

  useEffect(() => {
    setIsLoading(true)
    getBlogs()

    // firebase db den 
  //   const db= getDatabase();
  // const contentRef= ref(db, "myblog")

  // onValue(contentRef, (snapshot)=>{
  //   const data = snapshot.val()
  //   const myblogArray=[]
   
  //   for (let id in data){
  //     myblogArray.push({id, ...data[id]})
  //   }
  //   setContentCard(myblogArray)
  //   setIsLoading(false)


  // })
   
  }, [])
  return {isLoading,contentCard }
  
}


// * delete data

export const DeleteBlog = (id)=>{
  // const db= getDatabase();

  // const contentRef= ref(db, "myblog")
  // remove(ref(db, "myblog/"+id))





console.log(id);
fetch("http://127.0.0.1:8000/blog/api/"+id+"/", {method: 'DELETE'})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));





} 


// update 

export const EditBlog=(detail)=>{
  // const db= getDatabase();
  // const updates = {};
  
  // updates["/myblog/"+detail.id] = detail;
  //  return update(ref(db), updates)

  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    // "title": title,
    // "content": content,
    // "image": imageUrl,
    // "user": 2,
    // "date": date,
    // "post_view": 0,
    // "post_like": 0,
    // "comment_number": 0
    ...detail,
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/blog/api/" + detail.id + "/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 





}