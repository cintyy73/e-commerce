import {
  Avatar,
  Button,
  ButtonGroup,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'
import Order from './Order'
import { useContext } from 'react'
import { UserContext } from './UserContext/UserContext'

const Header = () => {
  const { isLogin } = useContext(UserContext)
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
              register
            </Button>
          )}

          <Button as={NavLink} to="">
            my account
          </Button>
          <Order />
        </ButtonGroup>
      </HStack>
    </GridItem>
  )
}

export default Header
