import {
  Button,
  // ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const City = (city) => {
  const { dessert, first, country, entrance, price, image, name } = city.city
  console.log(city.city)
  return (
    <Card
      bgColor="yellow.200"
      direction={{ base: 'column', lg: 'row' }}
      overflow="hidden"
      variant="outline"
      maxWidth="md"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', lg: '200px' }}
        src={image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="lg">{name} </Heading>
          <Heading size="md">{country} </Heading>

          <Text py="2">Entrance: </Text>
          <Text py="2">{entrance}</Text>
          <Text py="2">First course: </Text>
          <Text py="2">{first}</Text>
          <Text py="2">Dessert: </Text>
          <Text py="2">{dessert}</Text>
          <Text size={12}>${price}</Text>
        </CardBody>

        <CardFooter flexDirection={'column'} gap={2}>
          {/* <ButtonGroup alignItems="center" justifyContent="center">
            <Button>+</Button>
            <Text>0</Text>
            <Button>-</Button>
          </ButtonGroup> */}
          <Button
            as={NavLink}
            to="/cityDetails"
            variant="solid"
            colorScheme="yellow"
          >
            Details
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default City
