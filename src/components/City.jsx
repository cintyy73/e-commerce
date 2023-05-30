import {
  Button,
  // ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const City = (city) => {
  const { dessert, first, country, entrance, price, image, id, name } =
    city.city
  return (
    <Card
      border="4px solid black"
      bgColor="yellow.200"
      direction={{ base: 'column', lg: 'row' }}
      overflow="hidden"
      variant="outline"
      maxWidth="md"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', lg: '200px' }}
        height={{ base: '200px', md: '100%' }}
        src={image}
        alt="Caffe Latte"
      />

      <Stack gap={2}>
        <CardBody>
          <HStack>
            <Heading p={2} size="md">
              {name}
            </Heading>
            <Heading p={2} size="sm">
              {country}
            </Heading>
          </HStack>

          <Text textDecoration="underline" fontSize="small" py="2">
            Entrance:
          </Text>
          <Text fontSize="small" py="2">
            {entrance}
          </Text>
          <Text textDecoration="underline" fontSize="small" py="2">
            First course:
          </Text>
          <Text fontSize="small" py="2">
            {first}
          </Text>
          <Text textDecoration="underline" fontSize="small" py="2">
            Dessert:
          </Text>
          <Text fontSize="small" py="2">
            {dessert}
          </Text>
          <Text textAlign="center" fontSize="md" size={12}>
            ${price}
          </Text>
        </CardBody>

        <CardFooter flexDirection={'column'} gap={2}>
          <Button
            as={NavLink}
            to={'/city/' + id}
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
