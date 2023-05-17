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

export const getAssets = async () => {
  const data = await getDocs(collection(db, 'assets'))
  let info = []
  data.forEach((doc) => {
    info.push({
      ...doc.data(),
    })
  })
  console.log(info[0].face)
  console.log(info[0].twt)
  console.log(info[0].ig)
  return info
}
