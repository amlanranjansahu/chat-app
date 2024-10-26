
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAmRXOpzXjYc-Q75EUvlCpPad4_7r4tJss",
  authDomain: "chat-app-gs-cd3f9.firebaseapp.com",
  projectId: "chat-app-gs-cd3f9",
  storageBucket: "chat-app-gs-cd3f9.appspot.com",
  messagingSenderId: "813352205352",
  appId: "1:813352205352:web:7c298d44b83be258a0491d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
     try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
     } catch (error) {
        console.error(error)
        toast.error(error.code)
     }
}

export{signup}