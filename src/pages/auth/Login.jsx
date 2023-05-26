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
  FormErrorMessage,
} from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from 'context/UserContext'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePassword } from '../../utils/validation'
import logo from 'assets/favicon.png'

const Login = () => {
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const { loginUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmitlogin = async (data) => {
    try {
      await loginUser(data)

      setIsError(true)

      navigate('/')
    } catch (error) {
      setIsError(true)
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmitlogin)}>
      <Center
        paddingTop={5}
        gap="4"
        flexDirection="column"
        minHeight="100vh"
        bg="black"
        color="yellow.400"
      >
        <Heading>Welcome to Arian</Heading>
        <Avatar size="2xl" name="logo resto" src={logo} />

        {isError && (
          <>
            <Text>Please you must create an account to continue!</Text>
            <NavLink to="/register">Go Register</NavLink>
          </>
        )}
        <VStack>
          <FormControl isInvalid={errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input
              id="email"
              type="email"
              {...register('email', validateEmail)}
              placeholder="Email"
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password', validatePassword)}
              id="password"
              placeholder="Password"
            />
            <FormErrorMessage>{errors.password?.message}.</FormErrorMessage>
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
      {/* )} */}
    </form>
  )
}

export default Login
