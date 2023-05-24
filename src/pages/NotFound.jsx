import { VStack, Heading, Text, Center, Avatar, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import logo from 'assets/favicon.png'

const NotFound = () => {
  const navigate = useNavigate()
  const returnPage = () => navigate(-1)
  return (
    <Center height="100vh" backgroundColor="black" color="yellow.200">
      <VStack>
        <Heading>ERROR 404</Heading>
        <Text>Nout Found!</Text>
        <Heading>Return </Heading>
        <Avatar
          as={Link}
          onClick={returnPage}
          size="xl"
          name="logo resto"
          src={logo}
        />
      </VStack>
    </Center>
  )
}

export default NotFound
