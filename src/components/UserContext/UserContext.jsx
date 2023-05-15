import { createContext, useState } from 'react'
import { auth } from '../../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
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

  return (
    <UserContext.Provider value={{ user, register }}>
      {children}
    </UserContext.Provider>
  )
}
