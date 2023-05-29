import { VStack, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import City from '../components/City'
import { useMenu } from '../hooks/useMenu'

const Cities = () => {
  const { menu, loading } = useMenu()
  // menu.map((city) => console.log(city.id))
  return (
    <VStack w="100%" h="100%">
      <Heading mt={4} color="yellow.200" bg="black">
        All Cities
      </Heading>
      {loading && <Spinner color="yellow" size="xl" />}
      {!loading && (
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
      )}
    </VStack>
  )
}

export default Cities
