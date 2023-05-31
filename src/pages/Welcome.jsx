import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { getAuth } from 'firebase/auth'
import { NavLink, Navigate } from 'react-router-dom'

const Welcome = () => {
  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
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
        <VStack
          justifyContent="center"
          width="60%"
          minHeight="30vh"
          bg="black"
          color="yellow"
        >
          <Heading fontSize={25} as="h1">
            Welcome
          </Heading>
          <Heading fontSize={20} as="h2">
            {user.email ? user.email : ''}
          </Heading>
          <Heading fontSize={15} as="h3">
            Thank you for choosing us, We hope you enjoy this evening and come
            back soon!
          </Heading>
          <Text>Go ... </Text>
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
  } else {
    ;<Navigate to="/recents" replace />
  }
}

export default Welcome
