import { Heading, Spinner, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { recents } from '../services/cities'
import GridCities from '../components/GridCities'

const Recents = () => {
  const [isRecents, setIsRecents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getRecents = async () => {
      const recentsList = await recents()
      setIsRecents(recentsList)
      setIsLoading(false)
    }
    getRecents()
  }, [])

  return (
    <VStack>
      {isLoading && <Spinner color="yellow" size="xl" />}
      {!isLoading && (
        <>
          <Heading mt={4} color="yellow.200" bg="blackAlpha.600">
            Recents
          </Heading>
          <GridCities renderList={isRecents} />
        </>
      )}
    </VStack>
  )
}

export default Recents
