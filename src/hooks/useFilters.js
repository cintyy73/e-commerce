import { useEffect, useState } from 'react'
import { allCitiesFilters } from '../services/cities'

export const useFilters = () => {
  const [loading, setLoading] = useState(true)
  const [countryCities, setCountryCities] = useState([])
  const [values, setValues] = useState({
    min: 0,
    max: 1000,
    country: '',
  })
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleCountry = (city) =>
    setValues({ ...values, country: city.country })

  useEffect(() => {
    const getCitiesCountry = async () => {
      const cities = await allCitiesFilters(values.country)
      const filtList = cities.filter((city) => {
        if (city.price < values.min) {
          return false
        }
        if (city.price > values.max) {
          return false
        }
        return true
      })
      setCountryCities(filtList)
      setLoading(false)
    }
    getCitiesCountry()
  }, [values])
  console.log(countryCities)
  // logro filtrar x country y price( min y max)
  return { values, handleChange, handleCountry, countryCities, loading }
}
