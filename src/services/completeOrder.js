import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export const completeOrder = async (order, email, uid) => {
  // console.log(user, order)
  // const { email, uid } = user
  let total = 0
  for (const city of order) {
    total += city.price * city.quantity
  }
  if (email && uid) {
    const orderUser = {
      user: { email, uid },
      order,
      total,
    }
    // const { name, price, id } = order
    const doc = await addDoc(collection(db, 'orders'), orderUser)
    return doc
  }
}
