import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { EmailAuthProvider, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDjoZhzga9HeYS0678-G0InpbhOuwuGSXU",
  authDomain: "netflix-clone-3746a.firebaseapp.com",
  projectId: "netflix-clone-3746a",
  storageBucket: "netflix-clone-3746a.appspot.com",
  messagingSenderId: "377823001529",
  appId: "1:377823001529:web:5f59879d254a71a0fd1468",
  measurementId: "G-CYH7J7Y2CN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
      await  signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" ")); 
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};