import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import City from '../components/City'
import { useMenu } from '../hooks/useMenu'

const Cities = () => {
  const { menu, loading } = useMenu()
  return (
    <Center w="100%" h="100%">
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
    </Center>
  )
}

export default Cities
