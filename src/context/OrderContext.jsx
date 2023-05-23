import { createContext, useState } from 'react'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [isAdd, setIsAdd] = useState(false)
  const [order, setOrder] = useState([])

  const createOrder = (cityD, id, quantity) => {
    const { name, price } = cityD
    const orderExist = order.some((city) => city.id === id)
    const newOrder = {
      name,
      id,
      quantity,
      // table: '',
      // sucursal: '',
      price,
      // total,
    }
    if (!orderExist) {
      console.log(orderExist, 'entoces agregos', order)

      setOrder([...order, newOrder])
      setIsAdd(true)
    } else {
      setIsAdd(false)
    }
    console.log(isAdd)
  }

  return (
    <OrderContext.Provider value={{ order, createOrder, isAdd }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
