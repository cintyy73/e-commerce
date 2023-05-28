import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { deleteStorage } from '../utils/localStorage'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
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
      setIsLoading(false)
    })
  }, [])

  const signOff = () => {
    signOut(auth)
      .then(() => {
        deleteStorage('order')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <UserContext.Provider
      value={{ isLoading, user, registerUser, loginUser, signOff }}
    >
      {children}
    </UserContext.Provider>
  )
}
