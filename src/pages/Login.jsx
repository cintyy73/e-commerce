import {
  Center,
  FormControl,
  FormLabel,
  VStack,
  Input,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Avatar,
} from '@chakra-ui/react'

import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

const Login = () => {
  const [values, setValues] = useState({
    password: '',
    email: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const createCount = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }
  return (
    <Center
      paddingTop={5}
      onSubmit={createCount}
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
          <FormLabel>E-mail</FormLabel>
          <Input
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={handleChange}
            value={values.password}
            name="password"
            placeholder="Password"
          />
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="yellow">
            Create Account
          </Button>
          <Button colorScheme="red">Go out</Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Login
