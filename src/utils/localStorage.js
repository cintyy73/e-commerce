export const getStorage = (key) => JSON.parse(localStorage.getItem(key))
export const deleteOrderStorage = (key) => localStorage.removeItem(key)
export const deleteStorage = () => localStorage.clear()
export const setStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))
