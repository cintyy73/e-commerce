import { createContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  deleteOrderStorage,
  getStorage,
  setStorage,
} from '../utils/localStorage'
import { useToast } from '@chakra-ui/react'

export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
  const initialOrder = getStorage('order') || []
  const [order, setOrder] = useState(initialOrder)
  const toast = useToast()
  const navigate = useNavigate()

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
    toast({
      title: 'You have added ' + quantity + ' items to your order',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  useEffect(() => {
    setStorage('order', order)
  }, [order])

  const deleteOrder = () => {
    setOrder([])
    deleteOrderStorage('order')
  }

  const payOrder = () => {
    setOrder([])
    deleteOrderStorage('order')
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  const deleteCity = (id) => {
    const orderDelete = order.filter((city) => city.id !== id)
    setOrder(orderDelete)
    toast({
      title: 'Removed from your order succesfully',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        deleteOrder,
        deleteCity,
        createOrder,
        payOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
