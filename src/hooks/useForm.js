import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'
import { useState } from 'react'
// import { UserContext } from './UserContext'
// import { useContext } from 'react'

// export const register = async (e, values) => {
//   e.preventDefault()
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       values.email,
//       values.password
//     )
//     const user = userCredential.user
//     console.log(user)
//   } catch (error) {
//     const errorCode = error.code
//     const errorMessage = error.message
//     console.log(errorCode)
//     console.log(errorMessage)
//   }
// }
// export const login = async (e, values) => {
//   e.preventDefault()
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       values.email,
//       values.password
//     )
//     const user = userCredential.user
//     console.log(user)
//   } catch (error) {
//     const errorCode = error.code
//     const errorMessage = error.message
//     console.log(errorCode)
//     console.log(errorMessage)
//   }
// }
export const useForm = (intialState = {}) => {
  const [values, setValues] = useState(intialState)
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const register = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      const user = userCredential.user
      console.log(user)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    }
  }
  const login = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      const user = userCredential.user
      console.log(user)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    }
  }

  // return { handleChange, values }

  return { handleChange, values, register, login }
}
