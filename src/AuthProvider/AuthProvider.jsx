import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const provider = new GithubAuthProvider();


const LoginWithGoogle = ()=>{
    setLoading(true)
 return signInWithPopup(auth,GoogleProvider)
}
const loginWithGithub=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const logout =()=>{
    return signOut(auth)
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser ? currentUser : null);
    });

 
    return () => unsubscribe();
  }, []);
    const authInfo ={
      user,
      loading,
      LoginWithGoogle,
      loginWithGithub,
      logout
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;