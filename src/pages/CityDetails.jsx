import {
  Button,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
// import { MenuContext } from '../hooks/MenuContext'
// import { useContext } from 'react'

const CityDetails = () => {
  // const { menu } = useContext(MenuContext)
  // console.log(menu)
  return (
    <VStack>
      <Heading bg="black" p={4} color="yellow.300">
        Buenos Aires
      </Heading>
      <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md">entrada </Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://laestacionrock.com/wp-content/uploads/2020/06/rabas.jpg"
                alt="Caffe Latte"
              />

              <Text>Rabas con fritas </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md"> Firt </Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://img-global.cpcdn.com/recipes/recipes_7274_v1393322622_foto_foto_00030195/1200x630cq70/photo.jpg"
                alt="Caffe Latte"
              />

              <Text>risoto de frutos de mar</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md"> Dessert</Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://mediavine-res.cloudinary.com/image/upload/s--SXP2AKya--/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1647980647/w2sxgop35m5yaaqpe4i9.jpg"
                alt="Caffe Latte"
              />

              <Text>Flan mixto </Text>
            </CardBody>
          </Card>
        </GridItem>
      </SimpleGrid>
      <Heading color="yellow.200">$6740</Heading>

      <Button colorScheme="yellow">Add order</Button>
    </VStack>
  )
}

export default CityDetails
