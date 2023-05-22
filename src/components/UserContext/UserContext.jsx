import { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/config'
import {
  createUserWithEmailAndPassword,
  // getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const registerUser = async (data) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    const user = userCredential.user
    setUser(user)
  }
  const loginUser = async (data) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    const user = userCredential.user
    console.log(user)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        setIsLogin(true)
        console.log(uid)
      } else {
        // User is signed out
        setIsLogin(false)
      }
    })
  }, [isLogin])
  const signOff = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLogin(false)
      })
      .catch((error) => {
        // An error happened
        console.log(error)
      })
  }
  return (
    <UserContext.Provider
      value={{ user, registerUser, loginUser, isLogin, signOff }}
    >
      {children}
    </UserContext.Provider>
  )
}
