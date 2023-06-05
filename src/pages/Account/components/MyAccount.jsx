import { CalendarIcon } from '@chakra-ui/icons'
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
  List,
  ListItem,
  Text,
  Divider,
  Tooltip,
} from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { getOrders } from '../../../services/completeOrder'
import { UserContext } from '../../../context/UserContext'
const MyAccount = () => {
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useContext(UserContext)
  const { uid } = user
  const uidUser = uid
  const [dataUser, setDataUser] = useState({
    name: '',
    surname: '',
    email: '',
    order: '',
    total: '',
    complete: '',
  })
  useEffect(() => {
    const getData = async () => {
      const orderList = await getOrders()

      orderList.map((order) => {
        if (order.user.uid === uidUser) {
          const dataUser = {
            name: order.user.name,
            surname: order.user.surname,
            email: order.user.email,
            order: order.order,
          }
          setDataUser(dataUser)
        }
      })
    }
    getData()
  }, [uidUser])

  return (
    <>
      <Button
        size={{ base: 'xs', md: 'md' }}
        ref={btnRef}
        color="yellow.300"
        colorScheme="black"
        onClick={onOpen}
        variant={'outline'}
        rightIcon={<CalendarIcon />}
      >
        My User Data
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        closeOnOverlayClick={false}
        size={{ base: 'full', md: 'lg' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Tooltip color="red.300" hasArrow label="close">
            <DrawerCloseButton />
          </Tooltip>
          <DrawerHeader bg="black" color="yellow.100">
            <Heading color="yellow.200">My account 🪪</Heading>
          </DrawerHeader>
          <DrawerBody bg="black" color="yellow.100">
            {' '}
            <List spacing={3}>
              <ListItem>
                <Heading fontSize={20}>🫵 Name & Surname: </Heading>
                <Text fontSize={19}>
                  {dataUser.name} {dataUser.surname}
                </Text>
              </ListItem>
              <ListItem>
                <Heading fontSize={20}> 📧 E-mail: </Heading>
                <Text fontSize={19}>{dataUser.email}</Text>
              </ListItem>
              <ListItem>
                <Heading fontSize={20}>🍽️ Visit: </Heading>
                <Text fontSize={19}>order.length</Text>
              </ListItem>
              <ListItem>
                <Heading fontSize={20}>🌀Frequent tables </Heading>
                <Text fontSize={19}>number</Text>
              </ListItem>
            </List>
            <Divider />
          </DrawerBody>

          <DrawerFooter bg="black" color="yellow.100">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MyAccount
