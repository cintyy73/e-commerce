// import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
// import { useMenu } from '../hooks/useMenu'
// import City from './City'

// const Recommended = () => {
//   const { menu } = useMenu()
//   return (
//     <VStack>
//       <Heading mt={4} color="yellow.200" bg="black">
//         Recommended
//       </Heading>
//       <SimpleGrid
//         padding={6}
//         spacing={4}
//         templateColumns={{
//           base: 'repeat(1, minmax(300px, 1fr))',
//           md: 'repeat(2, minmax(300px, 1fr))',
//           xl: 'repeat(3, minmax(300px, 1fr))',
//         }}
//       >
//         {menu.map(
//           (city) => city.recommended && <City key={city.id} city={city}></City>
//         )}
//       </SimpleGrid>
//     </VStack>
//   )
// }

// export default Recommended
// +++++++++++++++++++
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import City from './City'
import { recommended } from '../services/cities'
import { useEffect, useState } from 'react'
const Recommended = () => {
  const [isRecommended, setIsRecommmended] = useState([])

  useEffect(() => {
    const getRecommended = async () => {
      const recommendedList = await recommended()
      setIsRecommmended(recommendedList)
    }
    getRecommended()
  }, [])
  return (
    <VStack>
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
    </VStack>
  )
}

export default Recommended
