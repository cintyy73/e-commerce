import { useContext } from 'react'
import { Spinner } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './context/UserContext'

import Home from './pages/Home'
import Recents from './pages/Recents'
import Cities from './pages/Cities'
import Recommended from './pages/Recommended'
import CityDetails from './pages/CityDetails'

import Menu from './components/Menu'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

import NotFound from './pages/NotFound'

import CheckOut from './pages/Account/CheckOut'
import LayoutAccount from './pages/Account/LayoutAccount'
import ProtectedRoute from './pages/Account/components/ProtectedRoute'
import OrderInProgress from './pages/Account/OrderInProgress'
import CitiesFilter from './pages/CitiesFilter'
import Welcome from './pages/Welcome'
import MyOrders from './pages/Account/components/MyOrders'

function App() {
  const { isLoading } = useContext(UserContext)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Recents />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/search" element={<CitiesFilter />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Route>

      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/my-account" element={<LayoutAccount />}>
          <Route path="orders" element={<MyOrders />} />

          <Route path="order-in-progress" element={<OrderInProgress />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
