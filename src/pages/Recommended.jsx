import { Heading, SimpleGrid, Spinner, VStack } from '@chakra-ui/react'
import City from '../components/City'
import { recommended } from '../services/cities'
import { useEffect, useState } from 'react'

const Recommended = () => {
  const [isRecommended, setIsRecommmended] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getRecommended = async () => {
      const recommendedList = await recommended()
      setIsLoading(false)
      setIsRecommmended(recommendedList)
    }
    getRecommended()
  }, [])

  return (
    <VStack>
      {isLoading && <Spinner color="yellow" size="xl" />}
      {!isLoading && (
        <>
          <Heading mt={4} color="yellow.200" bg="black">
            Recommended
          </Heading>
          <SimpleGrid
            padding={6}
            spacing={4}
            templateColumns={{
              base: 'repeat(1, minmax(300px, 1fr))',
              md: 'repeat(2, minmax(300px, 1fr))',
              xl: 'repeat(3, minmax(300px, 1fr))',
            }}
          >
            {isRecommended.map((city) => (
              <City key={city.id + 'recommended'} city={city}></City>
            ))}
          </SimpleGrid>
        </>
      )}
    </VStack>
  )
}

export default Recommended
