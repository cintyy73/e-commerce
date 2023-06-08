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
          <Heading
            mt={4}
            bg="blackAlpha.600"
            fontSize={{ base: 'md', md: '3xl' }}
            p={2}
            color="yellow.200"
          >
            {cityD?.name}
          </Heading>

          <SimpleGrid
            spacing={5}
            p={2}
            templateColumns={{
              base: 'repeat(1, 1fr) ',
              md: 'repeat(3, 1fr) ',
            }}
          >
            <GridItem textAlign="center" border="3px solid black" width="100%">
              <Card bgColor="yellow.200">
                <CardHeader>
                  <Heading fontSize="md">Entrance </Heading>
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
              <Card textAlign="center" bgColor="yellow.200">
                <CardHeader>
                  <Heading fontSize="md"> Main dish </Heading>
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
              <Card textAlign="center" bgColor="yellow.200">
                <CardHeader>
                  <Heading fontSize="md"> Dessert</Heading>
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
          <Heading bg="blackAlpha.600" color="yellow.200">
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
          <ButtonGroup p={3} gap={5} colorScheme="yellow">
            <Tooltip hasArrow label="Add" bg="green.600">
              <Button
                onClick={() => {
                  createOrder(cityD, id, quantity)
                }}
              >
                Add {quantity}
              </Button>
            </Tooltip>

            <Tooltip hasArrow label="Delete" bg="red.600">
              <Button
                onClick={() => {
                  deleteCity(id)
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
