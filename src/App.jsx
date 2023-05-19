import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Register from './pages/auth/Register'
import Recommended from './components/Recommended'
import Menu from './components/Menu'
import Cities from './pages/Cities'
import CityDetails from './pages/CityDetails'
import NotFound from './pages/NotFound'
import Login from './pages/auth/Login'

function App() {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route>
          <Route path="/" element={<Cities />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path=":id" element={<CityDetails />} />
        </Route>
      </Route>
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
