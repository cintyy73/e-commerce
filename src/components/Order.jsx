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

const Order = () => {
  const { add, subtract, quantity, error, errorMsj } = useQuantity()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
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
            <HStack alignItems="center" justifyContent="space-evenly">
              <VStack>
                <Text>Name city</Text>
                <Text>Name city</Text>
                <Text>Name city</Text>
              </VStack>
              <VStack>
                <Text>$456 price</Text>
                <Text>$456 price</Text>
                <Text>$456 price</Text>
              </VStack>
              <VStack>
                <HStack>
                  <Button onClick={subtract}>-</Button>
                  <Text>{quantity}</Text>
                  <Button onClick={add}>+</Button>
                </HStack>
                <HStack>
                  <Button onClick={add}>-</Button>
                  <Text>{quantity}</Text>
                  <Button onClick={subtract}>+</Button>
                </HStack>
                <HStack>
                  <Button onClick={subtract}>-</Button>
                  <Text>{quantity}</Text>

                  <Button onClick={add}>+</Button>
                </HStack>
              </VStack>
              <VStack>
                <Text>$456 price * {quantity}</Text>
                <Text>$456 price * {quantity}</Text>
                <Text>$456 price * {quantity}</Text>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            {error && (
              <Text bg="black" color="yellow.200" p={6}>
                {errorMsj}{' '}
              </Text>
            )}
            <VStack>
              <Text> total $$$456 price +=</Text>

              <Button size="lg" onClick={onClose}>
                ordenar y pagar $87870870
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order
