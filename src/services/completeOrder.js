import { addDoc, collection, getDocs } from 'firebase/firestore'
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
      complete: true,
    }
    await addDoc(collection(db, 'orders'), orderUser)
  }
}

export const getOrders = async () => {
  const querySnapshot = await getDocs(collection(db, 'orders'))
  const orders = querySnapshot.docs.map((doc) => doc.data())
  return orders
}
