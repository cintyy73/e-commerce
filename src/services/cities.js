import {
  collection,
  doc,
  endAt,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from 'firebase/firestore'
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

export const getById = async (id) => {
  const docRef = doc(db, 'cities', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    throw new Error('No exist doc')
  }
}
export const recommended = async () => {
  const q = query(collection(db, 'cities'), where('recommended', '==', true))
  let recommendedCity = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    recommendedCity.push({ ...doc.data(), id: doc.id })
    // console.log(doc.id, ' => ', doc.data())
  })
  return recommendedCity
}

export const recents = async () => {
  const q = query(collection(db, 'cities'), orderBy('name', 'desc'), limit(3))
  let recentsCity = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    recentsCity.push({ ...doc.data(), id: doc.id })
    // console.log(doc.id, ' => ', doc.data())
  })
  return recentsCity
}

export const allCitiesFilters = async (country) => {
  const q = query(
    collection(db, 'cities'),
    orderBy('country'),
    startAt(country),
    endAt(country + '/uf8ff')
  )
  let citiesXcountry = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    citiesXcountry.push({ ...doc.data(), id: doc.id })
  })
  return citiesXcountry
}
