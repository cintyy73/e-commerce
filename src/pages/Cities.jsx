import { VStack, Heading, Spinner } from '@chakra-ui/react'
import { useMenu } from '../hooks/useMenu'
import GridCities from '../components/GridCities'

const Cities = () => {
  const { menu, loading } = useMenu()

  return (
    <VStack w="100%" h="100%">
      <Heading mt={4} color="yellow.200" bg="blackAlpha.600">
        All Cities
      </Heading>
      {loading && <Spinner color="yellow" size="xl" />}
      {!loading && <GridCities renderList={menu} />}
    </VStack>
  )
}

export default Cities
