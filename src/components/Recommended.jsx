import { SimpleGrid } from '@chakra-ui/react'
import { useMenu } from '../hooks/useMenu'
import City from './City'

const Recommended = () => {
  const { menu } = useMenu()
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
      {menu.map(
        (city) => city.recommended && <City key={city.id} city={city}></City>
      )}
    </SimpleGrid>
  )
}

export default Recommended
