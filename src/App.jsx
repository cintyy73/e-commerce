import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Register from './pages/auth/Register'
import Recommended from './components/Recommended'
import Menu from './components/Menu'
import Cities from './pages/Cities'
import CityDetails from './pages/CityDetails'
import NotFound from './pages/NotFound'
import Login from './pages/auth/Login'
import CheckOut from './pages/Account/CheckOut'
import LayoutAccount from './pages/Account/LayoutAccount'
import ProtectedRoute from './pages/Account/ProtectedRoute'
import OrderInProgress from './pages/Account/OrderInProgress'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Spinner } from '@chakra-ui/react'
import Recents from './pages/Recents'

function App() {
  const { isLoading } = useContext(UserContext)
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Recents />} />
        {/* //cambiar a limit */}

        <Route path="/cities" element={<Cities />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Route>
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/my-account" element={<LayoutAccount />}>
          <Route path="order-in-progress" element={<OrderInProgress />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Route>
      {/* <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <LayoutAccount />
          </ProtectedRoute>
        }
      >
        <Route path="order-in-progress" element={<OrderInProgress />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
