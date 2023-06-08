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
        h="100%"
        gap={5}
        alignContent="center"
        textAlign="center"
      >
        <VStack
          color="yellow.300"
          justifyContent="center"
          bg="blackAlpha.700"
          p={5}
          rounded={10}
        >
          <Heading fontSize={25} as="h1">
            Welcome!
          </Heading>
          <Heading fontSize={20} as="h2">
            {user.email ? user.email : ''}
          </Heading>
          <Heading color="blue.400" textAlign="center" fontSize={15} as="h3">
            Thank you for choosing us!
          </Heading>
          <Text>Go to your account to see your orders</Text>
          <Text color="green">Go ... </Text>
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
