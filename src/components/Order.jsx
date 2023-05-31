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
  Tooltip,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { OrderContext } from 'context/OrderContext'
import { Link } from 'react-router-dom'
import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'

const Order = () => {
  const { order, deleteOrder, deleteCity } = useContext(OrderContext)
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
        🍽️ My order
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
          <Tooltip hasArrow label="Close" bg="red.600">
            <ModalCloseButton />
          </Tooltip>
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
                  </VStack>
                  <VStack w="25%">
                    <Text>$ {city.price * city.quantity}</Text>
                  </VStack>
                  <VStack>
                    <Tooltip hasArrow label="Delete" bg="red.600">
                      <IconButton
                        size="lg"
                        colorScheme="black"
                        onClick={() => {
                          deleteCity(city.id)
                        }}
                        icon={<DeleteIcon />}
                      />
                    </Tooltip>
                  </VStack>
                </HStack>
              )
            })}
          </ModalBody>
          <ModalFooter>
            <VStack>
              <HStack w="100%">
                <Text w="55%">Total </Text>

                <Text w="45%">$ {total}</Text>
                <Tooltip hasArrow label="Delete" bg="red.600">
                  <IconButton
                    size="lg"
                    colorScheme="black"
                    onClick={() => {
                      deleteOrder()
                    }}
                    icon={<DeleteIcon />}
                  />
                </Tooltip>
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
