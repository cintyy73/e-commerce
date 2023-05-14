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

const CityDetails = () => {
  return (
    <VStack>
      <Heading bg="black" p={4} color="yellow.200">
        Nombre ciudad
      </Heading>
      <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md">Plato principal: shfskjdgfkasd</Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Text>decsripcion </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md"> entrada: nombre </Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Text>decsripcion</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem width="100%">
          <Card>
            <CardHeader>
              <Heading size="md"> POtres: ajdhfjkashf</Heading>
            </CardHeader>
            <CardBody>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Text>decsripcion </Text>
            </CardBody>
          </Card>
        </GridItem>
      </SimpleGrid>
      <Heading color="yellow.200">$6740</Heading>

      <Button colorScheme="yellow">Add pedido</Button>
    </VStack>
  )
}

export default CityDetails
