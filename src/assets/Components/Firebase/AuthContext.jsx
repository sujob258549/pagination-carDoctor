import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";




export const CreatAuth = createContext(null)

const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const [user, setuser] = useState()
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const ligineUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const goodleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }

    const unsubsCribe = onAuthStateChanged(auth, (user) => {
        if (user) {

            setuser(user)

        } else {
            setuser(null)
        }

        return () => {
            unsubsCribe()
        }
    });


    const signout = () => {
        return signOut(auth)
            .then(() => {
                setuser('')
            }).catch((error) => {
                console.error(error)
            });
    };

    const upadateprofile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const authinfo = {
        user,
        createUser,
        ligineUser,
        goodleSignIn,
        signout,
        upadateprofile
    }
    return (
        <CreatAuth.Provider value={authinfo}>
            {children}
        </CreatAuth.Provider>
    );
};

export default AuthContext;