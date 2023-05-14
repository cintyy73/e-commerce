import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const createUser = async (e, { email, password }) => {
  e.preventDefault()
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
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
export const signInWith = async (e, { email, password }) => {
  e.preventDefault()

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
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
