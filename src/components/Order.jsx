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

const Order = () => {
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
                  <Text>-</Text>
                  <Text>0</Text>
                  <Text>+</Text>
                </HStack>
                <HStack>
                  <Text>-</Text>
                  <Text>0</Text>
                  <Text>+</Text>
                </HStack>
                <HStack>
                  <Text>-</Text>
                  <Text>0</Text>
                  <Text>+</Text>
                </HStack>
              </VStack>
              <VStack>
                <Text>$456 price * quantity</Text>
                <Text>$456 price * quantity</Text>
                <Text>$456 price * quantity</Text>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <VStack>
              <Text> total $$$456 price * quantity+=</Text>

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
