import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

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
    setUser(user)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setUser({
          email: user.email,
          password: user.password,
          uid,
        })
      } else {
        setUser(null)
      }
    })
  }, [])
  const signOff = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened
        console.log(error)
      })
  }
  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, signOff }}>
      {children}
    </UserContext.Provider>
  )
}
