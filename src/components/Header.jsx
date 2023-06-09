import {
  Avatar,
  Button,
  ButtonGroup,
  GridItem,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { OrderContext } from 'context/OrderContext'

import { CheckCircleIcon, ChevronDownIcon, EditIcon } from '@chakra-ui/icons'

const Header = () => {
  const { deleteOrder } = useContext(OrderContext)
  const { signOff, user } = useContext(UserContext)

  return (
    <GridItem w="100%" p={5} bg="black" color="#ffc600" area={'header'}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar size={{ base: 'lg', md: 'xl' }} name="logo resto" src={logo} />
        <VStack textAlign="center">
          <Heading fontSize={{ base: 'lg', md: '4xl' }}>
            Arian Maldonado
          </Heading>
          <Text fontSize={{ base: 'xs', md: 'xl' }}>CHEFF INTERNATIONAL</Text>
        </VStack>

        <HStack gap={2} flexDirection={{ base: 'column', md: 'row' }}>
          <ButtonGroup
            flexDirection={{ base: 'column', md: 'row' }}
            size={{ base: 'xs', md: 'md' }}
            colorScheme="yellow"
          >
            {!user && (
              <Button
                m={2}
                rightIcon={<EditIcon />}
                as={NavLink}
                to="/register"
              >
                Register
              </Button>
            )}
            {!user && (
              <Button
                m={2}
                rightIcon={<CheckCircleIcon />}
                as={NavLink}
                to="/login"
              >
                Login
              </Button>
            )}
          </ButtonGroup>

          {user && (
            <Menu>
              <MenuButton
                size={{ base: 'xs', md: 'md' }}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme="yellow"
              >
                Account😋
              </MenuButton>
              <Portal>
                <MenuList color="yellow.200" background="black">
                  <MenuItem
                    as={Link}
                    to="/my-account/orders"
                    background="black"
                    color="green.100"
                  >
                    <Text textDecoration="underline">{user.email}</Text>
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    background="black"
                    to="/my-account/checkout"
                  >
                    Checkout
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    background="black"
                    to="/my-account/order-in-progress"
                  >
                    My order in progress
                  </MenuItem>
                  <MenuItem
                    background="black"
                    color="red"
                    onClick={() => {
                      deleteOrder()
                      signOff()
                    }}
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          )}
        </HStack>
      </HStack>
    </GridItem>
  )
}

export default Header
