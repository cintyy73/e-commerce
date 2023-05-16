import { createContext, useState } from 'react'
import { auth } from '../../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const register = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    const user = userCredential.user
    setUser(user)
    // } catch (error) {
    //   const errorCode = error.code
    //   const errorMessage = error.message
    //   console.log(errorCode)
    //   console.log(errorMessage)
    // }
  }
  const login = async (values) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    const user = userCredential.user
    console.log(user)
  }
  return (
    <UserContext.Provider value={{ user, register, login }}>
      {children}
    </UserContext.Provider>
  )
}
