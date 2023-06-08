import {
  GridItem,
  VStack,
  Text,
  HStack,
  Avatar,
  Heading,
  Link,
  Tooltip,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'

const Footer = () => {
  return (
    <GridItem bgColor="black" color="yellow.200" pl="2" area={'footer'}>
      <HStack pt={5} justifyContent="space-around">
        <HStack gap={4}>
          <VStack display={{ base: 'none', md: 'flex' }}>
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
          <VStack display={{ base: 'none', md: 'flex' }}>
            <Text as={NavLink} to="/my-account">
              My account
            </Text>
            <Text as={NavLink} to="/login">
              Login
            </Text>
            <Text as={NavLink} to="/register">
              Create account
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <Avatar size="xl" name="logo resto" src={logo} />

          <Heading display={{ base: 'none', md: 'flex' }} size={3}>
            Arian RESTAURANTE INTERNACIONAL
          </Heading>
        </HStack>
        <HStack justifyContent="space-evenly">
          <Tooltip colorScheme="facebook" hasArrow label="Go Facebook">
            <Link target="blank" href="https://es-la.facebook.com">
              <Avatar
                size="md"
                name="logo facebook"
                src="https://www.citypng.com/public/uploads/preview/-51615208019svqsspmeg7.png?v=2023051621"
              />
            </Link>
          </Tooltip>
          <Tooltip colorScheme="facebook" hasArrow label="Go Instagram">
            <Link target="blank" href="https://www.instagram.com/">
              <Avatar
                size="md"
                name="logo instagram"
                src="https://www.citypng.com/public/uploads/preview/-11598200949vmcvk1prc6.png?v=2023051621 "
              />
            </Link>
          </Tooltip>
          <Tooltip colorScheme="facebook" hasArrow label="Go twitter">
            <Link target="blank" href="https://twitter.com">
              <Avatar
                size="md"
                name="logo twitter"
                src="https://www.citypng.com/public/uploads/preview/-51615207660lfhck0plbm.png?v=2023051621"
              />
            </Link>
          </Tooltip>
        </HStack>
      </HStack>
    </GridItem>
  )
}

export default Footer
