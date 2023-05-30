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
  // const [isAdd, setIsAdd] = useState(false)
  const [order, setOrder] = useState(initialOrder)
  const navigate = useNavigate()
  // const [finallyOrder, setFinallyOrder] = useState([])

  const createOrder = (cityD, id, quantity) => {
    const { name, price } = cityD

    const orderExist = order.some((city) => city.id === id)

    const newOrder = {
      name,
      id,
      quantity,
      price,
    }

    if (!orderExist) {
      setOrder([...order, newOrder])
    } else {
      const newOrders = order.map((order) => {
        if (order.id === id) {
          order.quantity = quantity
        }
        return order
      })
      setOrder(newOrders)
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

  const deleteCity = (id) => {
    const orderDelete = order.filter((city) => city.id !== id)
    setOrder(orderDelete)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        deleteOrder,
        deleteCity,
        createOrder,
        // isAdd,
        payOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
