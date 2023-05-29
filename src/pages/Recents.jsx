import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import City from '../components/City'
import { useEffect, useState } from 'react'
import { recents } from '../services/cities'
const Recents = () => {
  const [isRecents, setIsRecents] = useState([])

  useEffect(() => {
    const getRecents = async () => {
      const recentsList = await recents()
      setIsRecents(recentsList)
    }
    getRecents()
  }, [])

  return (
    <VStack>
      <Heading mt={4} color="yellow.200" bg="black">
        Recents
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
        {isRecents.map((city) => (
          <City key={city.id + 'recent'} city={city}></City>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Recents
