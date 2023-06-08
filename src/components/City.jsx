import { NavLink } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  useMenu,
} from '@chakra-ui/react'

const City = (city) => {
  const { loading } = useMenu()
  const { dessert, first, country, entrance, price, image, id, name } =
    city.city

  if (loading) {
    return <Spinner />
  }

  return (
    <Card
      border="4px solid black"
      bgColor="yellow.200"
      direction={{ base: 'column', lg: 'row' }}
      overflow="hidden"
      variant="outline"
      maxWidth="md"
      fontSize={{ base: 'sm', lg: 'md' }}
      boxShadow="dark-lg"
      rounded="md"
      p={2}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', lg: '200px' }}
        height={{ base: '200px', md: '100%' }}
        src={image}
        alt={name}
      />

      <Stack gap={2} p={2}>
        <CardBody textAlign="center">
          <Heading p={2} size="md">
            {name}
          </Heading>
          <Heading p={2} size="sm">
            {country}
          </Heading>

          <Text textDecoration="underline" py="2">
            Entrance:
          </Text>
          <Text py="2">{entrance}</Text>
          <Text textDecoration="underline" py="2">
            Main dish
          </Text>
          <Text py="2">{first}</Text>
          <Text textDecoration="underline" py="2">
            Dessert:
          </Text>
          <Text py="2">{dessert}</Text>
          <Text fontSize="md" size={12}>
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
