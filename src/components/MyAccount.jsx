import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { UserContext } from 'context/UserContext'
const MyAccount = () => {
  const { user } = useContext(UserContext)
  console.log(user)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Button ref={btnRef} color="yellow" colorScheme="black" onClick={onOpen}>
        My account--hacer!!
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="black" color="yellow.100">
            <Heading>name</Heading>
          </DrawerHeader>

          <DrawerBody bg="black" color="yellow.100"></DrawerBody>

          <DrawerFooter bg="black" color="yellow.100">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="yellow">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MyAccount
