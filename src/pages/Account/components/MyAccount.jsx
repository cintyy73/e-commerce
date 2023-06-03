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
  SimpleGrid,
  // Stack,
  // GridItem,
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

  // const [ordersList, setOrdersList] = useState([])
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
      // setOrdersList(orderList)
      // const userData = await getUserData(uid)
      // console.log(userData)
      orderList.map((order) => {
        if (order.user.uid === uid) {
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
  }, [uid])

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
            {!dataUser.order && <Heading>Dont have orders ...</Heading>}
            {dataUser.order && (
              <>
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
                <Heading p={5} color="yellow.200">
                  My orders 📋
                </Heading>
                <Divider mb={4} />
                <SimpleGrid
                  alignItems=""
                  spacing={4}
                  templateColumns={{
                    base: 'repeat(1, minmax(300px, 1fr))',
                    md: 'repeat(2, minmax(300px, 1fr))',
                  }}
                >
                  {/* {ordersList.map((order) => {
                ;<GridItem key={order.id} bg="black" color="yellow.100">
                  <Stack border="1px solid green" p={4} maxWidth="max-content">
                    <Text>order</Text>
                    <Text>Order: {order.id}</Text>
                    <Text>Complete: complete</Text>
                    <Text>E-mail: email</Text>
                    <Text>Total: total</Text>
                  </Stack>
                </GridItem>
              })} segun firebas no hay consultas hasta aca llegue, antes del map funcionaba ok!
              hasta cuando borre los items*/}
                </SimpleGrid>
              </>
            )}
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
