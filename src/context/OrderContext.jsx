import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteOrderStorage, getStorage } from '../utils/localStorage'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const initialOrder = getStorage('order') || []
  const [isAdd, setIsAdd] = useState(false)
  const [order, setOrder] = useState(initialOrder)
  const navigate = useNavigate()
  console.log(initialOrder, order)
  // const [finallyOrder, setFinallyOrder] = useState([])

  const createOrder = (cityD, id, quantity) => {
    const { name, price } = cityD

    const orderExist = order.some((city) => city.id === id)
    //
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
  const deleteOrder = () => {
    setOrder([])
    deleteOrderStorage('order')
  }
  const payOrder = () => {
    navigate('/')
    setOrder([])
    deleteOrderStorage('order')
  }

  return (
    <OrderContext.Provider
      value={{ order, deleteOrder, createOrder, isAdd, payOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
