import { addDoc, collection } from 'firebase/firestore'
import { createContext, useState } from 'react'
import { db } from '../../firebase/config'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    name: '',
    id: '',
    table: '',
    sucursal: '',
    price: 0,
    img: '',
    quantity: 0,
  })
  const createOrder = (city, quantity) => {
    const { name, id, price, img } = city
    setOrder({
      ...order,
      name,
      id,
      table: '',
      sucursal: '',
      price,
      img,
      quantity,
    })
    console.log(order)
  }
  const completeOrder = async (order) => {
    const { city, quantity, price } = order
    const doc = await addDoc(collection(db, 'orders'), {
      city,
      quantity,
      price,
    })
    setOrder(doc)
  }
  return (
    <OrderContext.Provider value={(order, createOrder, completeOrder)}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
