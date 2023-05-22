import { addDoc, collection } from 'firebase/firestore'
import { createContext, useState } from 'react'
import { db } from '../../firebase/config'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([{}])
  const createOrder = (cityD, quantity, id) => {
    const { name, price } = cityD

    order.find((city) => {
      console.log(city.id === id)
      console.log(city.id, id)
      console.log(order)
      if (city?.id !== id) {
        setOrder([
          ...order,
          {
            name,
            id,
            // table: '',
            // sucursal: '',
            price,
            // img,
            total: 0,
          },
        ])
      } else {
        setOrder([...order])
      }
    })
  }
  const completeOrder = async (order, total) => {
    // console.log(user, order)
    // const { email, uid } = user
    const orderUser = {
      user: { email: 'fake', id: 'fake' },
      order,
      total,
    }
    // const { name, price, id } = order
    const doc = await addDoc(collection(db, 'orders'), orderUser)
    console.log(doc)
  }

  return (
    <OrderContext.Provider value={{ order, createOrder, completeOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
