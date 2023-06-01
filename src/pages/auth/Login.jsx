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
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from 'context/UserContext'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePassword } from '../../utils/validation'
import logo from 'assets/favicon.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const Login = () => {
  const [isError, setIsError] = useState(false)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate()
  const toast = useToast()
  const { loginUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const onSubmitlogin = async (data) => {
    setIsError(false)
    try {
      await loginUser(data)
      setIsError(false)
      toast({
        title: 'User successfully logged',
        description: 'You will be redirected to the Home',
        status: 'success',
        isClosable: true,
        duration: 2000,
      })

      setTimeout(() => {
        navigate('/welcome')
      }, 2000)
    } catch (error) {
      setIsError(true)
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      toast({
        title: 'Failed to login!',
        description: errorCode,
        status: 'error',
        isClosable: true,
        duration: 4000,
      })
    }
  }
  const resetLogin = (e) => {
    e.target.reset
    setIsError(false)
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
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                {...register('password', validatePassword)}
                id="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? (
                    <ViewOffIcon color="black" />
                  ) : (
                    <ViewIcon color="black" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{errors.password?.message}.</FormErrorMessage>
          </FormControl>
          <ButtonGroup>
            <Button type="submit" isLoading={isSubmitting} colorScheme="yellow">
              Login
            </Button>
            <Button onClick={resetLogin} type="reset" colorScheme="red">
              Cancel
            </Button>
            <Button as={NavLink} to="/" variant="outline" colorScheme="black">
              HOME
            </Button>
          </ButtonGroup>
        </VStack>
      </Center>
    </form>
  )
}

export default Login
