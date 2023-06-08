import { getAuth } from 'firebase/auth'

import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) {
    return <Navigate to="/login" replace />
  } else {
    return <Outlet />
  }
}

export default ProtectedRoute
