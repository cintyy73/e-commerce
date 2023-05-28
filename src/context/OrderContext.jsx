import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  deleteOrderStorage,
  getStorage,
  setStorage,
} from '../utils/localStorage'
export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const initialOrder = getStorage('order') || []
  const [isAdd, setIsAdd] = useState(false)
  const [order, setOrder] = useState(initialOrder)
  const navigate = useNavigate()
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
      price,
      // total,
    }
    if (!orderExist) {
      setOrder([...order, newOrder])

      setIsAdd(true)
    } else {
      setIsAdd(false)
    }
  }
  useEffect(() => {
    setStorage('order', order)
  }, [order])

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
