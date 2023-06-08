import {
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
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { OrderContext } from 'context/OrderContext'
import { Link } from 'react-router-dom'
import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'
import { getAuth } from 'firebase/auth'

const Order = () => {
  const auth = getAuth()
  const user = auth.currentUser
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
        My order
      </Button>
      <Modal
        size={{ base: 'full', md: '6xl' }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          fontSize={{ base: 'xs', md: 'md' }}
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
            {order?.map(({ price, id, quantity, name }) => {
              total = total + price * quantity
              return (
                <HStack
                  key={id + name}
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <VStack w="30%" p={3}>
                    <Text>{name} </Text>
                  </VStack>
                  <VStack w="30%">
                    <Text>$ {price}</Text>
                  </VStack>
                  <VStack w="10%">
                    <Text>{quantity}</Text>
                  </VStack>
                  <VStack w="30%">
                    <Text>$ {price * quantity}</Text>
                  </VStack>
                  <VStack>
                    <Tooltip hasArrow label="Delete" bg="red.600">
                      <IconButton
                        size="lg"
                        colorScheme="black"
                        onClick={() => {
                          deleteCity(id)
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
                <Text>Total </Text>

                <Text>$ {total}</Text>
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
              <Tooltip
                hasArrow
                label={user ? 'Continue pay' : 'Go login and pay'}
                bg="green.100"
                color="black"
              >
                <Button
                  as={Link}
                  colorScheme="yellow"
                  size="lg"
                  to={
                    order.length > 0
                      ? '/my-account/checkout'
                      : '/my-account/order-in-progress'
                  }
                  onClick={onClose}
                >
                  {user ? 'Order and pay ' + total : 'Login and pay'}
                </Button>
              </Tooltip>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order
