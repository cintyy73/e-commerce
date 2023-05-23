import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export const completeOrder = async (order, total) => {
  // console.log(user, order)
  // const { email, uid } = user
  const orderUser = {
    user: { email: 'fake', id: 'fake' },
    order,
    total,
  }
  // const { name, price, id } = order
  const doc = await addDoc(collection(db, 'orders'), orderUser)
  return doc
}
