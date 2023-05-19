import {
  // Button,
  // ButtonGroup,
  // Card,
  // CardBody,
  // CardHeader,
  // GridItem,
  // Heading,
  // Image,
  // SimpleGrid,
  // SimpleGrid,
  // Text,
  VStack,
} from '@chakra-ui/react'
// import { useQuantity } from '../hooks/useQuantity'
// import { useContext } from 'react'
import { useMenu } from '../hooks/useMenu'
// import { OrderContext } from '../components/OrderContext/OrderContext'

const CityDetails = () => {
  const { cityD } = useMenu()
  console.log(cityD)
  // const { createOrder } = useContext(OrderContext)
  // console.log(menu)
  //  const { order, completeOrder } = useContext(OrderContext)
  // const {
  // name,
  // entrance,
  // first,
  // dessert,
  // imgFirst,
  // imgDessert,
  // imgEntrance,
  // price,
  // } = cityD
  console.log(cityD.name)
  // const { add, subtract, quantity, error, errorMsj } = useQuantity()
  return (
    <VStack>
      {/* <Heading bg="black" p={4} color="yellow.200">
        {name}
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
              <Text>{entrance} </Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={imgEntrance}
                alt={entrance}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card bgColor="yellow.200">
            <CardHeader>
              <Heading size="md"> First </Heading>
              <Text>{first}</Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                minH={{ base: '100%', sm: '200px' }}
                src={imgFirst}
                alt={first}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card bgColor="yellow.200">
            <CardHeader>
              <Heading size="md"> Dessert</Heading>
              <Text>{dessert} </Text>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src={imgDessert}
                alt={dessert}
              />
            </CardBody>
          </Card>
        </GridItem>
      </SimpleGrid>
      <Heading bg="black" color="yellow.200">
        ${price}
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
        <Button
        // onClick={() => createOrder(city, quantity)}
        >
          ADD
        </Button>
      </ButtonGroup>
      {error && (
        <Text bg="black" color="yellow.200" p={6}>
          {errorMsj}
        </Text>
      )} */}
    </VStack>
  )
}

export default CityDetails
