// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import {Toastify} from "./toastNotify";


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

export const createUser = async (email, 
  password, navigate) =>{
  try {
    let userCredential = await createUserWithEmailAndPassword (
      auth, 
      email, 
      password
    )
    navigate("/dashboard")
    console.log(userCredential)
  } catch (error) {
    
  }
}

export const signIn = async (email, 
  password, navigate) =>{
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    navigate("/dashboard")
    Toastify("success")
    console.log(userCredential)
  } catch (err) {
    alert(err.message)
  }
}

export const logOut =()=>{
  signOut(auth);
  Toastify("logged out successfully")
  // alert("logged out successfully");
}



// kayıtlı olan user i takip ediyor ve logout olup olmadığı sayfadaki yeni kullanıcı girişini takip ediyor

//  burada belirtilen currentUser vesetCurrentuser i context yapıdan çağırıyoruz, 



export const userObserver = (setCurrentUser)=>{
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
    } else {
      setCurrentUser(false)
    }
  });
}


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
  const db= getDatabase();
  const contentRef= ref(db, "myblog")
  const newContentRef = push(contentRef)
  set((newContentRef),{
    title : title,
    image :imageUrl,
    content :content,
    date : date,
    email:email,
  })
}


// * bigi çağırma

export const  useFunc =()=>{
  const [isLoading, setIsLoading] = useState()
  const [contentCard, setContentCard] = useState()

  useEffect(() => {
    setIsLoading(true)

    const db= getDatabase();
  const contentRef= ref(db, "myblog")

  onValue(contentRef, (snapshot)=>{
    const data = snapshot.val()
    const myblogArray=[]
   
    for (let id in data){
      myblogArray.push({id, ...data[id]})
    }
    setContentCard(myblogArray)
    setIsLoading(false)


  })
   
  }, [])
  return {isLoading,contentCard }
  
}


// * delete data

export const DeleteBlog = (id)=>{
  const db= getDatabase();

  const contentRef= ref(db, "myblog")
  remove(ref(db, "myblog/"+id))
} 


// update 

export const EditBlog=(detail)=>{
  const db= getDatabase();
  const updates = {};
  
  updates["/myblog/"+detail.id] = detail;
   return update(ref(db), updates)
}