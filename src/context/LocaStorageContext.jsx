import { createContext, useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import { OrderContext } from './OrderContext'
import { setStorage } from '../utils/localStorage'

export const LocalStorageContext = createContext()

const LocalStorageProvider = ({ children }) => {
  const { user } = useContext(UserContext)
  const { order } = useContext(OrderContext)

  useEffect(() => {
    setStorage('order', order)
    setStorage('user', { email: user?.email, uid: user?.uid })
  }, [user, order])

  return (
    <LocalStorageContext.Provider value={setStorage}>
      {children}
    </LocalStorageContext.Provider>
  )
}

export default LocalStorageProvider
