import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
export const getAllCities = async () => {
  const data = await getDocs(collection(db, 'cities'))
  let menu = []
  data.forEach((doc) => {
    menu.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return menu
}
