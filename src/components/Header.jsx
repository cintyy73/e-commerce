import {
  Avatar,
  Button,
  ButtonGroup,
  GridItem,
  HStack,
  Heading,
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
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  )
  const [overlay] = useState(<OverlayTwo />)
  return (
    <GridItem p={5} bg="black" color="#ffc600" area={'header'}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar size="xl" name="logo resto" src="./src/assets/favicon.png" />
        <VStack>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEF INTERNATIONAL</Text>
        </VStack>
        <ButtonGroup size="sm" colorScheme="yellow">
          <Button as={NavLink} to="/login">
            Login
          </Button>
          <Button as={NavLink} to="/register">
            register
          </Button>

          <Button as={NavLink} to="/order">
            order
          </Button>
          <>
            <Button
              ml="4"
              onClick={() => {
                onOpen()
              }}
            >
              My order
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Custom backdrop filters!</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </ButtonGroup>
      </HStack>
    </GridItem>
  )
}

export default Header
