import {
  GridItem,
  VStack,
  Text,
  HStack,
  Avatar,
  Heading,
  Link,
  Divider,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <GridItem bgColor="black" color="yellow.200" pl="2" area={'footer'}>
      <Divider color="yellow.300"></Divider>
      <HStack justifyContent="space-around">
        <HStack gap={4}>
          <VStack>
            <Text as={NavLink} to="/">
              Home
            </Text>
            <Text as={NavLink} to="/menu">
              Menu
            </Text>
            <Text as={NavLink} to="/recommended">
              Recommended
            </Text>
          </VStack>
          <VStack>
            <Text as={NavLink} to="/order">
              Order
            </Text>
            <Text as={NavLink} to="/login">
              Login
            </Text>
            <Text as={NavLink} to="/register">
              Crete account
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Avatar size="xl" name="logo resto" src="./src/assets/favicon.png" />
          https://ibb.co/qxLX6vf
          <Heading size={3}>Arian RESTAURANTE INTERNACIONAL</Heading>
        </HStack>
        <VStack>
          <Link target="blank" href="https://es-la.facebook.com">
            Facebook
          </Link>
          <Link target="blank" href="https://twitter.com">
            Twitter
          </Link>
          <Link target="blank" href="https://www.instagram.com/">
            Instagram
          </Link>
        </VStack>
      </HStack>
    </GridItem>
  )
}

export default Footer
