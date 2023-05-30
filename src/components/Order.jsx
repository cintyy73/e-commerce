import {
  // Box,
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  // NumberDecrementStepper,
  // NumberIncrementStepper,
  // NumberInput,
  // NumberInputField,
  // NumberInputStepper,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { OrderContext } from 'context/OrderContext'
// import { completeOrder } from '../services/createOrder'
import { Link } from 'react-router-dom'
import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'

const Order = () => {
  const { order, deleteOrder, deleteCity } = useContext(OrderContext)
  // const [quantity, setQuantity] = useState(1)
  // console.log(quantity)
  let total = 0
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        size={{ base: 'xs', md: 'md' }}
        colorScheme="black"
        rightIcon={<CalendarIcon />}
        variant="outline"
        ml="4"
        onClick={() => {
          onOpen()
        }}
      >
        My order
      </Button>
      <Modal size="6xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          fontSize={20}
          padding={5}
          color="yellow.100"
          bgColor="black"
          border="4px solid green"
        >
          <ModalHeader fontStyle="underline" fontSize={30} textAlign="center">
            Order
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {order?.map((city) => {
              total = total + city.price * city.quantity
              return (
                <HStack
                  key={city.id + city.name}
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <VStack w="25%" p={3}>
                    <Text>{city.name} </Text>
                  </VStack>
                  <VStack w="25%">
                    <Text>$ {city.price}</Text>
                  </VStack>
                  <VStack w="25%">
                    <Text>{city.quantity}</Text>
                    {/* <NumberInput
                    color="yellow"
                    min={1}
                    max={city.stock}
                    defaultValue={city.quantity}
                    onChange={(value) => setQuantity(Number(value))}
                    name={city.name}
                  >
                    <Box bg="black">
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </Box>
                  </NumberInput> */}
                  </VStack>
                  <VStack w="25%">
                    <Text>$ {city.price * city.quantity}</Text>
                  </VStack>
                  <VStack>
                    <IconButton
                      size="lg"
                      colorScheme="black"
                      onClick={() => {
                        deleteCity(city.id)
                      }}
                      icon={<DeleteIcon />}
                    />
                  </VStack>
                </HStack>
              )
            })}
          </ModalBody>
          <ModalFooter>
            {/* {error && (
              <Text bg="black" color="yellow.200" p={6}>
                {errorMsj}
              </Text>
            )} */}
            <VStack>
              <HStack w="100%">
                <Text w="55%">Total </Text>

                <Text w="45%">$ {total}</Text>
                <IconButton
                  size="lg"
                  colorScheme="black"
                  onClick={() => {
                    deleteOrder()
                  }}
                  icon={<DeleteIcon />}
                />
              </HStack>

              <Button
                as={Link}
                colorScheme="yellow"
                size="lg"
                to="/my-account/checkout"
                onClick={onClose}
              >
                Order and pay ${total}
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order
