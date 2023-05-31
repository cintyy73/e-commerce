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
  Tooltip,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../services/cities'
import { OrderContext } from 'context/OrderContext'
import { DeleteIcon } from '@chakra-ui/icons'

const CityDetails = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cityD, setCityD] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const { createOrder, deleteCity } = useContext(OrderContext)
  const { id } = useParams()
  const toast = useToast()

  useEffect(() => {
    const getData = async () => {
      const data = await getById(id)
      setCityD(data)
      setIsLoading(false)
    }
    getData()
  }, [id])

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
                <Tooltip
                  hasArrow
                  placement="top-start"
                  label="+"
                  bg="green.600"
                >
                  <NumberIncrementStepper />
                </Tooltip>
                <Tooltip hasArrow label="-" bg="red.600">
                  <NumberDecrementStepper />
                </Tooltip>
              </NumberInputStepper>
            </Box>
          </NumberInput>
          <ButtonGroup gap={5} colorScheme="yellow">
            <Tooltip hasArrow label="Add" bg="green.600">
              <Button
                onClick={() => {
                  createOrder(cityD, id, quantity)
                  toast({
                    title:
                      'You have added ' + quantity + ' items to your order',
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
                }}
              >
                Add {quantity}
              </Button>
            </Tooltip>
            T
            <Tooltip hasArrow label="Delete" bg="red.600">
              <Button
                onClick={() => {
                  deleteCity(id)
                  toast({
                    title: 'Removed from your order succesfully',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
                }}
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </>
      )}
    </VStack>
  )
}

export default CityDetails
