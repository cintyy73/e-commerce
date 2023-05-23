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
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'
import Order from './Order'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { ChevronDownIcon } from '@chakra-ui/icons'
import MyAccount from './MyAccount'
// import { signOut } from 'firebase/auth'

const Header = () => {
  const { isLogin, signOff } = useContext(UserContext)
  return (
    <GridItem p={5} bg="black" color="#ffc600" area={'header'}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar size="xl" name="logo resto" src={logo} />
        <VStack>
          <Heading>Arian Maldonado</Heading>
          <Text>CHEF INTERNATIONAL</Text>
        </VStack>
        <ButtonGroup size="sm" colorScheme="yellow">
          {!isLogin && (
            <Button as={NavLink} to="/login">
              Login
            </Button>
          )}
          {!isLogin && (
            <Button as={NavLink} to="/register">
              Register
            </Button>
          )}
        </ButtonGroup>
        {isLogin && (
          <Menu>
            <MenuButton
              colorScheme="yellow"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              My account
            </MenuButton>
            <MenuList background="black">
              <MyAccount />
              <MenuItem background="black" as={Link} to="/order">
                My orders--hacer!!
              </MenuItem>
              <MenuItem background="black" as={Link} to="/order">
                My current order
              </MenuItem>
              <MenuItem background="black" color="red" onClick={signOff}>
                Sign off
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        <Order />
      </HStack>
    </GridItem>
  )
}

export default Header
