import { NavLink, Outlet } from 'react-router-dom'

import {
  Avatar,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import logo from 'assets/favicon.png'
import MyAccount from './components/MyAccount'
import Order from '../../components/Order'
const LayoutAccount = () => {
  return (
    <VStack minH="100vh" bg="black">
      <HStack
        gap={3}
        width="100%"
        flexDir={{ base: 'column', md: 'row' }}
        w="100%"
        color="yellow.200"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Avatar size="xl" name="logo resto" src={logo} />
        <VStack display={{ base: 'none', md: 'flex' }}>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEFF INTERNATIONAL</Text>
        </VStack>
        <Button
          size={{ base: 'xs', md: 'md' }}
          to="/"
          variant="outline"
          as={NavLink}
          colorScheme="black"
        >
          📌 HOME
        </Button>

        <MyAccount />

        <Order />
      </HStack>
      <Stack color="yellow.100" bg="black">
        <Outlet />
      </Stack>
    </VStack>
  )
}
export default LayoutAccount
