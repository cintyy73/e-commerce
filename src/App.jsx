import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Citys from './pages/Citys'

import Register from './pages/Register'
import All from './components/All'
import Menu from './components/Menu'

function App() {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route>
          <Route path="/" element={<All />} />
          <Route path="/citys" element={<Citys />} />
        </Route>
      </Route>
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
