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
  Stack,
  GridItem,
  Divider,
  Tooltip,
} from '@chakra-ui/react'
import { useRef } from 'react'
const MyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
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
        size={{ base: 'xs', md: 'lg' }}
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
            <List spacing={3}>
              <ListItem>
                <Heading fontSize={20}>🫵 Name & Surname: </Heading>
                <Text fontSize={19}>name surname</Text>
              </ListItem>
              <ListItem>
                <Heading fontSize={20}> 📧 E-mail: </Heading>
                <Text fontSize={19}>email</Text>
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
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              <GridItem bg="black" color="yellow.100">
                <Stack border="1px solid green" p={4} maxWidth="max-content">
                  <Text>order</Text>
                  <Text>Order: id</Text>
                  <Text>Complete: complete</Text>
                  <Text>E-mail: email</Text>
                  <Text>Total: total</Text>
                </Stack>
              </GridItem>{' '}
              {/* {orders.map((order) => (
                <Stack key={id}>
                  <Text>order</Text>
                  <Text>Order: {id}</Text>
                  <Text>Complete: {complete}</Text>
                  <Text>E-mail: {email}</Text>
                  <Text>Total: {total}</Text>
                </Stack>
              ))} */}
            </SimpleGrid>
          </DrawerBody>

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
