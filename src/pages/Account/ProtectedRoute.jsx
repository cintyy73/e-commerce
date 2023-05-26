// import { useContext } from 'react'

// import UserContext from 'hooks/UserContext'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
  // const { user } = useContext(UserContext)
  // console.log(user)
  const userL = true
  if (!userL) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default ProtectedRoute
