import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export const completeOrder = async (orderData) => {
  const { order, name, surname, uid, email, table } = orderData
  let total = 0
  for (const city of order) {
    total += city.price * city.quantity
  }

  if (email && uid) {
    const orderUser = {
      user: { name, surname, email, uid },
      table,
      order,
      total,
    }
    await addDoc(collection(db, 'orders'), orderUser)
  }
}
