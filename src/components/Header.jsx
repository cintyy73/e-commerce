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
  useToast,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'
import Order from './Order'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { OrderContext } from 'context/OrderContext'

import { CheckCircleIcon, ChevronDownIcon, EditIcon } from '@chakra-ui/icons'
// import { signOut } from 'firebase/auth'

const Header = () => {
  const { deleteOrder } = useContext(OrderContext)
  const { signOff, user } = useContext(UserContext)
  const toast = useToast()

  return (
    <GridItem p={5} bg="black" color="#ffc600" area={'header'}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar size="xl" name="logo resto" src={logo} />
        <VStack display={{ base: 'none', md: 'flex' }}>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEFF INTERNATIONAL</Text>
        </VStack>
        <VStack display={{ base: 'flex', md: 'none' }}>
          <Heading>Arian M.</Heading>
          <Text>CHEFF INT.</Text>
        </VStack>

        <HStack>
          <ButtonGroup size={{ base: 'xs', md: 'md' }} colorScheme="yellow">
            {!user && (
              <Button rightIcon={<EditIcon />} as={NavLink} to="/register">
                Register
              </Button>
            )}
            {!user && (
              <Button rightIcon={<CheckCircleIcon />} as={NavLink} to="/login">
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
                My account
              </MenuButton>
              <Portal>
                <MenuList color="yellow.200" background="black">
                  <MenuItem as={Link} background="black" to="/my-account">
                    My account
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
                      toast({
                        position: 'top-right',
                        title: 'Sign off correct',
                        status: 'success',
                        isClosable: true,
                        duration: 3000,
                      })
                    }}
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          )}
          <Order />
        </HStack>
      </HStack>
    </GridItem>
  )
}

export default Header
