import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

const City = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">Buenos aires</Heading>
          <Text py="2">entrada:huhgguug</Text>
          <Text py="2">plat: hdgfdghg</Text>
          <Text py="2">postre: hgygh</Text> <Text size={12}>$8569824</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            deatils
          </Button>
          <ButtonGroup>
            <Button>+</Button>
            <Text>0</Text>
            <Button>-</Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default City
