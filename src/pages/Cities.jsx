import { SimpleGrid } from '@chakra-ui/react'
import City from '../components/City'
import { useEffect, useState } from 'react'
import { getAllCities } from '../services/cities'

const Cities = () => {
  const [menu, setMenu] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  useEffect(() => {
    const getMenu = async () => {
      const menu = await getAllCities()
      setMenu(menu)
    }
    getMenu()
  }, [])
  return (
    <SimpleGrid
      padding={6}
      spacing={4}
      templateColumns={{
        base: 'repeat(1, minmax(300px, 1fr))',
        md: 'repeat(2, minmax(300px, 1fr))',
        xl: 'repeat(3, minmax(300px, 1fr))',
      }}
    >
      {menu.map((city) => (
        <City key={city.id} city={city}></City>
      ))}
    </SimpleGrid>
  )
}

export default Cities
