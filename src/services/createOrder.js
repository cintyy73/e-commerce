import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export const createOrder = async (order) => {
  const { city, quantity } = order
  const doc = await addDoc(collection(db, 'orders'), {
    city,
    quantity,
  })
  return doc
}
