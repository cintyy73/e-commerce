import {
  Box,
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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useQuantity } from '../hooks/useQuantity'
import { useContext } from 'react'
import { OrderContext } from 'context/OrderContext'
import { completeOrder } from '../services/createOrder'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { DeleteIcon } from '@chakra-ui/icons'
// import { UserContext } from '../context/UserContext'

const Order = () => {
  const { user } = useContext(UserContext)
  console.log(user)
  const { order, emptyOrder } = useContext(OrderContext)
  const total = 0
  const { quantity, setQuantity, error, errorMsj } = useQuantity()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        size={{ base: 'xs', md: 'lg' }}
        colorScheme="yellow"
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
            name surname this is your order
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {order?.map((city) => (
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
                  <NumberInput
                    color="yellow"
                    defaultValue={1}
                    min={1}
                    max={city.stock}
                    value={quantity}
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
                </VStack>
                <VStack w="25%">
                  <Text>$ {city.price * quantity}</Text>
                </VStack>
              </HStack>
            ))}
          </ModalBody>
          <ModalFooter>
            {error && (
              <Text bg="black" color="yellow.200" p={6}>
                {errorMsj}
              </Text>
            )}
            <VStack>
              <HStack w="100%">
                <Text w="55%">Total </Text>

                <Text w="45%">$ {total}</Text>
              </HStack>

              <Button
                as={Link}
                colorScheme="yellow"
                size="lg"
                to="/checkout"
                onClick={() => {
                  completeOrder(order, total)

                  onClose()
                }}
              >
                Order and pay $87870870
              </Button>
              <IconButton
                size="lg"
                colorScheme="black"
                onClick={() => {
                  console.log(order)
                  emptyOrder()
                  console.log(order)
                }}
                icon={<DeleteIcon />}
              />
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order
