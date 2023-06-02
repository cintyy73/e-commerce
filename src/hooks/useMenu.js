import { useEffect, useState } from 'react'
import { getAllCities } from '../services/cities'
import { collection, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useParams } from 'react-router-dom'

export const useMenu = () => {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const getMenu = async () => {
      const menu = await getAllCities()
      setLoading(false)
      setMenu(menu)
    }
    getMenu()
  }, [])

  const cityDet = doc(collection(db, 'cities'))

  const cityD = menu.find((c) => c.id === id)

  return { cityDet, menu, loading, cityD }
}
