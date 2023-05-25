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
import MyAccount from '../../components/MyAccount'
const LayoutAccount = () => {
  return (
    <VStack bg="black">
      <HStack
        bg="black"
        color="yellow"
        minw="100%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Avatar size="xl" name="logo resto" src={logo} />
        <VStack display={{ base: 'none', md: 'flex' }}>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEFF INTERNATIONAL</Text>
        </VStack>
        <Button to="/" as={NavLink} colorScheme="yellow">
          HOME
        </Button>
        <MyAccount />
      </HStack>
      <Stack color="yellow.100" bg="black">
        <Outlet />
      </Stack>
    </VStack>
  )
}
export default LayoutAccount
