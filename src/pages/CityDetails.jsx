import {
  Button,
  ButtonGroup,
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
import { useQuantity } from '../hooks/useQuantity'
// import { MenuContext } from '../hooks/MenuContext'
// import { useContext } from 'react'

const CityDetails = () => {
  // const { menu } = useContext(MenuContext)
  // console.log(menu)
  //  const { order, completeOrder } = useContext(OrderContext)
  const { add, subtract, quantity, error, errorMsj } = useQuantity()
  return (
    <VStack>
      <Heading bg="black" p={4} color="yellow.200">
        Buenos Aires
      </Heading>
      <SimpleGrid
        spacing={7}
        templateColumns={{
          base: 'repeat(1, 1fr) ',
          md: 'repeat(3, 1fr) ',
        }}
      >
        <GridItem border="3px solid black" width="100%">
          <Card bgColor="yellow.200">
            <CardHeader>
              <Heading size="md">Entrance </Heading>
              <Text>entrance </Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://laestacionrock.com/wp-content/uploads/2020/06/rabas.jpg"
                alt="entrance"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card bgColor="yellow.200">
            <CardHeader>
              <Heading size="md"> First </Heading>
              <Text>first</Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                minH={{ base: '100%', sm: '200px' }}
                src="https://img-global.cpcdn.com/recipes/recipes_7274_v1393322622_foto_foto_00030195/1200x630cq70/photo.jpg"
                alt="first"
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card bgColor="yellow.200">
            <CardHeader>
              <Heading size="md"> Dessert</Heading>
              <Text>dessert </Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://mediavine-res.cloudinary.com/image/upload/s--SXP2AKya--/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1647980647/w2sxgop35m5yaaqpe4i9.jpg"
                alt="dessert"
              />
            </CardBody>
          </Card>
        </GridItem>
      </SimpleGrid>
      <Heading bg="black" color="yellow.200">
        $price
      </Heading>
      <ButtonGroup gap={5}>
        <Button onClick={subtract} colorScheme="yellow">
          -
        </Button>
        <Heading bg="black" color="yellow.200">
          {quantity}
        </Heading>
        <Button onClick={add} colorScheme="yellow">
          +
        </Button>
        <Button>ADD</Button>
      </ButtonGroup>
      {error && (
        <Text bg="black" color="yellow.200" p={6}>
          {errorMsj}{' '}
        </Text>
      )}
    </VStack>
  )
}

export default CityDetails
