import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const [isAdd, setIsAdd] = useState(false)
  const [order, setOrder] = useState([])
  const navigate = useNavigate()
  // const [finallyOrder, setFinallyOrder] = useState([])

  const createOrder = (cityD, id, quantity) => {
    console.log(quantity)
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
    console.log(order)
  }
  const payOrder = () => {
    navigate('/')
    setOrder([])
  }

  // const finallyOrder = () => {}
  return (
    <OrderContext.Provider value={{ order, createOrder, isAdd, payOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
