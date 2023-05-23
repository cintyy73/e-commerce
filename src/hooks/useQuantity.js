import { useState } from 'react'

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(false)
  // const [msjStock, setMsjStock]=useState(false)
  const errorQuantity = () => {
    quantity >= 0 ? setError(false) : setError(true)

    if (quantity === 0) {
      setError(true)
    }
    if (quantity > 0) {
      setError(false)
    }
  }
  const errorMsj = 'You connot add 0 quantityto your order'
  return { error, quantity, errorQuantity, errorMsj, setQuantity }
}
