import { VStack, Heading, Text, Center, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from 'assets/favicon.png'

const NotFound = () => {
  return (
    <Center height="100vh" backgroundColor="black" color="yellow.200">
      <VStack>
        <Heading>ERROR 404</Heading>
        <Text>Nout Found!</Text>
        <Heading>Return </Heading>
        <Avatar
          as={Link}
          to="/"
          size="xl"
          name="logo resto"
          // src="./src/assets/favicon.png"
          src={logo}
        />
      </VStack>
    </Center>
  )
}

export default NotFound
