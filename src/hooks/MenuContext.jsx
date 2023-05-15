import { createContext, useEffect, useState } from 'react'
import { getAllCities } from '../services/cities'

export const MenuContext = createContext()

export const MenuProvider = (children) => {
  const [menu, setMenu] = useState()

  useEffect(() => {
    const getMenu = async () => {
      const menu = await getAllCities()
      setMenu(menu)
    }
    getMenu()
  }, [])
  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  )
}
