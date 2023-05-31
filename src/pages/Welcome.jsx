import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { getAuth } from 'firebase/auth'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  const auth = getAuth()
  const user = auth.currentUser
  return (
    <VStack
      p={5}
      justifyContent="center"
      alignItems="center"
      w="100%"
      minH="70vh"
      color="yellow.200"
      gap={5}
    >
      <VStack>
        <Heading fontSize={25} as="h1">
          Welcome
        </Heading>
        <Heading fontSize={20} as="h2">
          {user.email}
        </Heading>
        <Heading fontSize={15} as="h3">
          Thank you for choosing us, We hope you enjoy this evening and come
          back soon!
        </Heading>
        <Text>Go ... </Text>
      </VStack>
      <VStack pt={5} justifyContent="space-around">
        <Button
          as={NavLink}
          to="/my-account/checkout"
          colorScheme="yellow"
          size="lg"
          variant="solid"
        >
          Checkout
        </Button>
      </VStack>
    </VStack>
  )
}

export default Welcome
