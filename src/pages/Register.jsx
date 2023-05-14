import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

const Register = () => {
  return (
    <Center
      paddingTop={5}
      as="form"
      gap="4"
      flexDirection="column"
      minHeight="100vh"
      bg="black"
      color="yellow.400"
    >
      <Heading>Welcome to Arian</Heading>
      <Avatar size="2xl" name="logo resto" src="./src/assets/favicon.png" />

      <Text>Please you must create an account to continue!</Text>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" placeholder="Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Surname</FormLabel>
          <Input name="surname" placeholder="Surname" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input name="email" placeholder="Email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" placeholder="Password" />
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="yellow">
            Sign up
          </Button>
          <Button colorScheme="red">Go out</Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Register
