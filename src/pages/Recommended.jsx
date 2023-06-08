import { Heading, Spinner, VStack } from '@chakra-ui/react'
import { recommended } from '../services/cities'
import { useEffect, useState } from 'react'
import GridCities from '../components/GridCities'

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
          <Heading mt={4} color="yellow.200" bg="blackAlpha.600">
            Recommended Top 5
          </Heading>
          <GridCities renderList={isRecommended} />
        </>
      )}
    </VStack>
  )
}

export default Recommended
