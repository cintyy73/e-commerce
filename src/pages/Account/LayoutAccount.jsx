import { NavLink, Outlet } from 'react-router-dom'

import { Avatar, Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import logo from 'assets/favicon.png'
const LayoutAccount = () => {
  return (
    <VStack bg="black">
      <HStack
        bg="black"
        color="yellow"
        w="100%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Avatar size="xl" name="logo resto" src={logo} />
        <VStack>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEFF INTERNATIONAL</Text>
        </VStack>
        <Button to="/" as={NavLink} colorScheme="yellow">
          HOME
        </Button>
      </HStack>

      <Outlet />
    </VStack>
  )
}
export default LayoutAccount
