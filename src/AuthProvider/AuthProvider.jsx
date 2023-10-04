import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   createUser
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
}

//login with google
const googleProvider = new GoogleAuthProvider()
const createGoogleAccount = ()=>{
    return signInWithPopup(auth, googleProvider);
}

// update profile
const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

 //signin with firebase
 const signIn =(email, password)=>{
    return signInWithEmailAndPassword(auth,email, password)
 }

// logout
const logOut =()=>{
    return signOut(auth);
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    createGoogleAccount,
    loading,
    logOut,
    signIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
