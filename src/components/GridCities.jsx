import { SimpleGrid } from '@chakra-ui/react'
import City from './City'

const GridCities = ({ renderList }) => {
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
      {renderList.map((city) => (
        <City key={city.id + 'recent'} city={city}></City>
      ))}
    </SimpleGrid>
  )
}

export default GridCities
