import {
  // Heading, SimpleGrid,
  VStack,
} from '@chakra-ui/react'
// import City from '../components/City'
import { useParams } from 'react-router-dom'

const Country = () => {
  const { country } = useParams()
  console.log(country)
  return (
    <VStack w="100%" h="100%">
      {/* <Heading mt={4} color="yellow.200" bg="black">
        [country]
      </Heading>
      (
      <SimpleGrid
        padding={6}
        spacing={4}
        templateColumns={{
          base: 'repeat(1, minmax(300px, 1fr))',
          md: 'repeat(2, minmax(300px, 1fr))',
          xl: 'repeat(3, minmax(300px, 1fr))',
        }}
      >
        {country.map((city) => (
          <City key={city.id} city={city}></City>
        ))}
      </SimpleGrid>
      ) */}
    </VStack>
  )
}

export default Country
