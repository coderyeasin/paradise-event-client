import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import paradiseInitialization from '../pages/Firebase/Firebase.init';
import axios from 'axios';
import Swal from 'sweetalert2'


//must include Initialize
paradiseInitialization();

const useFirebase = () => {

    //user Activity --states
    const [users, setUser] = useState({});
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const [status, setStatus] = useState('')

///////////////////////////////////
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

////////////////////////////////////
    //newUser from field
    const createNewUser = (email, password, name, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            
            const newUser = { email, displayName: name } // name set korte hole state use korte hobe must
            setUser(newUser) //firebase theke user er name set hoiche
            
            userInfoSave(email, name, 'POST')

            setAuthError('')
            // const user = result.user;
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {

              }).catch((error) => {
                
              });

              const destination = location?.state?.from || '/'
              navigate(destination);
        })
            .catch((error) => {
            
         setAuthError(error.message);

        })
        .finally (() => setIsLoading(false))
    }

////////////////////////////
    //users Login with field
    const usersCanLogin = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const destination = location?.state?.from || '/'
            navigate(destination);
            setAuthError('')
        })
        .catch((error) => {
          
            setAuthError(error.message);
        })
        .finally (() => setIsLoading(false))
    }


 ///////////////////////////////////////   
    //Google Sign In
    const googleLoginUsers = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                userInfoSave(user.email, user.displayName, 'PUT')
                setAuthError('');

            const path = location?.state?.from || '/'
                navigate(path)
                
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally (() => setIsLoading(false))
    }

///////////////////////////////////
    //observe user
    useEffect(() => {

      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
            getIdToken(user)
                .then(idToken => {
                setToken(idToken);
                // console.log(idToken);
            })
           
        } else {
            setUser({})
          
        }
        setIsLoading(false)
      });
        return  () => unsubscribed
    }, [])

////////////////////////////////
    //admin checking
    useEffect(() => {
        fetch(`http://localhost:5000/users/${users?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin) // key admin hisebe data asteche tai
            })
        
    },[users?.email])

///////////////////////////////////
//signOut
    const usersLogout = () => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        })
        .finally(() => setIsLoading(false))
    }


/////////////////user info save to db
    const userInfoSave = (email, displayName) => {
        let user = { email, displayName }
        axios.post('http://localhost:5000/users', user)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    `Congratulations!`,
                    'Successfully Created!',
                    'success'
                )
            }
        console.log(res);
    })
   
    }
    
    
//////////////////////////////////
    // Authentication send
    return {
        admin,
        users, setUser,
        token,
        isLoading,
        authError,
        createNewUser,
        usersCanLogin,
        googleLoginUsers,
        usersLogout
    }
};

export default useFirebase;