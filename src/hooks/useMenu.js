import { useEffect, useState } from 'react'
import { getAllCities } from '../services/cities'

export const useMenu = () => {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  useEffect(() => {
    const getMenu = async () => {
      const menu = await getAllCities()
      setLoading(false)
      setMenu(menu)
    }
    getMenu()
  }, [])
  return { menu, loading }
}
