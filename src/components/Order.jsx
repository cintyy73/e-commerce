import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useQuantity } from '../hooks/useQuantity'
import { useContext } from 'react'
import { OrderContext } from './OrderContext/OrderContext'
// import { UserContext } from './UserContext/UserContext'

const Order = () => {
  // const { user } = useContext(UserContext)
  // console.log(user) nollega info user
  const { completeOrder, order } = useContext(OrderContext)
  const total = 0

  const { add, subtract, quantity, error, errorMsj } = useQuantity()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          onOpen()
          // completeOrder(order)
          // console.log(order)
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
                  <HStack>
                    <Button onClick={subtract}>-</Button>
                    <Text>{quantity}</Text>
                    <Button onClick={add}>+</Button>
                  </HStack>
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
                colorScheme="yellow"
                size="lg"
                onClick={() => {
                  completeOrder(order, total)
                  onClose()
                }}
              >
                Order and pay $87870870
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order
