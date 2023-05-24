// import { useContext } from 'react'
// import UserContext from 'hooks/UserContext'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  // const { user } = useContext(UserContext)
  const user = false
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute
