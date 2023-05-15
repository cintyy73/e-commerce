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
import { useForm } from '../../hooks/useForm'
import { NavLink } from 'react-router-dom'

//import { useState } from 'react'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase/config'

const Login = () => {
  const { values, login, handleChange } = useForm({
    password: '',
    email: '',
  })

  return (
    <Center
      onSubmit={login}
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
            Login
          </Button>
          <Button as={NavLink} to="/" colorScheme="red">
            Cancel
          </Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Login