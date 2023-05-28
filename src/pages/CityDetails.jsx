import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../services/cities'
import { OrderContext } from 'context/OrderContext'

const CityDetails = () => {
  const [cityD, setCityD] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const toast = useToast()
  const { isAdd } = useContext(OrderContext)
  useEffect(() => {
    const getData = async () => {
      const data = await getById(id)
      setCityD(data)
      setIsLoading(false)
    }
    getData()
  }, [id])

  const { createOrder } = useContext(OrderContext)
  //  const { order, completeOrder } = useContext(OrderContext)
  return (
    <VStack>
      {isLoading && <Spinner color="yellow" size="xl" />}
      {!isLoading && (
        <>
          <Heading bg="black" p={4} color="yellow.200">
            {cityD?.name}
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
                  <Text>{cityD?.entrance} </Text>
                </CardHeader>
                <CardBody>
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '200px' }}
                    h="200px"
                    src={cityD?.imgEntrance}
                    alt={cityD?.entrance}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem width="100%">
              <Card bgColor="yellow.200">
                <CardHeader>
                  <Heading size="md"> First </Heading>
                  <Text>{cityD?.first}</Text>
                </CardHeader>
                <CardBody>
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '200px' }}
                    h="200px"
                    src={cityD?.imgFirst}
                    alt={cityD?.first}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem width="100%">
              <Card bgColor="yellow.200">
                <CardHeader>
                  <Heading size="md"> Dessert</Heading>
                  <Text>{cityD?.dessert} </Text>
                </CardHeader>
                <CardBody>
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '200px' }}
                    h="200px"
                    src={cityD?.imgDessert}
                    alt={cityD?.dessert}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </SimpleGrid>
          <Heading bg="black" color="yellow.200">
            ${cityD?.price}
          </Heading>
          <NumberInput
            color="yellow"
            defaultValue={1}
            min={1}
            max={cityD.stock}
            value={quantity}
            name={cityD.id}
            onChange={(value) => setQuantity(Number(value))}
          >
            <Box bg="black">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </Box>
          </NumberInput>
          <ButtonGroup gap={5}>
            <Button
              onClick={() => {
                createOrder(cityD, id, quantity)
                toast({
                  title: isAdd
                    ? 'Added to your order'
                    : 'Cannot be added to your order',
                  status: isAdd ? 'success' : 'warning',
                  duration: 4000,
                  isClosable: true,
                })
              }}
            >
              ADD
            </Button>
          </ButtonGroup>
          {/* {error && (
            <Text bg="black" color="yellow.200" p={6}>
              {errorMsj}
            </Text>
          )} */}
        </>
      )}
    </VStack>
  )
}

export default CityDetails
