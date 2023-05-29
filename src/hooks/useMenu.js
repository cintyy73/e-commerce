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
  // const limitCities = query(cityDet, orderBy('name'), limit(3))
  // const { city } = menu
  // console.log(q)

  // const q = query(cityDet, where('country', '==', 'russia'))
  // // Add a new document with a generated id
  // const country = async () => {
  //   const querySnapshot = await getDocs(q)
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, ' => ', doc.data())
  //   })
  // }
  // country()
  // later...

  return { cityDet, menu, loading, cityD }
}
