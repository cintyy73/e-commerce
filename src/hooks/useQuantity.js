import { useState } from 'react'

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(false)
  const add = () => {
    quantity >= 0 ? setError(false) : setError(true)
    console.log(quantity)
    setQuantity((prev) => prev + 1)
  }
  const subtract = () => {
    console.log(quantity)
    if (quantity === 0) {
      setError(true)
    }
    if (quantity > 0) {
      setQuantity((prev) => prev - 1)
      setError(false)
    }
  }
  const errorMsj = 'You connot add 0 quantityto your order'
  return { error, add, subtract, quantity, errorMsj }
}
