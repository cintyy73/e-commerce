import { useEffect, useState } from 'react'
import { getAllCities } from '../services/cities'
import {
  collection,
  doc,
  // getDocs,
  // limit,
  // orderBy,
  // query,
  // where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useParams } from 'react-router-dom'

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
  const cityDet = doc(collection(db, 'cities'))

  const { id } = useParams()
  const cityD = menu.find((c) => c.id === id)

  return { cityDet, menu, loading, cityD }
}
