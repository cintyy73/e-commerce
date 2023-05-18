// import { createContext, useState } from 'react'
// import { auth } from '../../firebase/config'
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth'
// export const UserContext = createContext()

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const register = async (values) => {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       values.email,
//       values.password
//     )
//     const user = userCredential.user
//     setUser(user)
//     // } catch (error) {
//     //   const errorCode = error.code
//     //   const errorMessage = error.message
//     //   console.log(errorCode)
//     //   console.log(errorMessage)
//     // }
//   }
//   const login = async (values) => {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       values.email,
//       values.password
//     )
//     const user = userCredential.user
//     console.log(user)
//   }
//   return (
//     <UserContext.Provider value={{ user, register, login }}>
//       {children}
//     </UserContext.Provider>
//   )
// }
// ++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++
import { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
        console.log('is login', uid)
      } else {
        // User is signed out
        setIsLogin(false)
        console.log(isLogin)
      }
    })
  }, [isLogin])

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, isLogin }}>
      {children}
    </UserContext.Provider>
  )
}
