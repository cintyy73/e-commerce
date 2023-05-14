import { SimpleGrid } from '@chakra-ui/react'
import City from '../components/City'

const Cities = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <City></City>
      <City></City>
      <City></City>
      <City></City>
      <City></City>
    </SimpleGrid>
  )
}

export default Cities
