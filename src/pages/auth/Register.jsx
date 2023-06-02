import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  useToast,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from 'context/UserContext'
import logo from 'assets/favicon.png'
import {
  validateEmail,
  validateName,
  validatePassword,
  validateSurname,
  validateRepitePassword,
} from '../../utils/validation'

const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { registerUser } = useContext(UserContext)
  const onSubmitRegister = async (data) => {
    try {
      await registerUser(data)
      toast({
        title: 'Account create successfully',
        description: 'You will redirected to login',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      toast({
        title: errorCode,
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <Center
      onSubmit={handleSubmit(onSubmitRegister)}
      paddingTop={5}
      as="form"
      gap="4"
      flexDirection="column"
      minHeight="100vh"
      bg="black"
      color="yellow.400"
    >
      <Heading>Welcome to Arian</Heading>
      <Avatar size="xl" name="logo resto" src={logo} />

      <VStack>
        <FormControl isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            {...register('name', validateName)}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.surname}>
          <FormLabel>Surname</FormLabel>
          <Input
            id="surname"
            placeholder="Surname"
            {...register('surname', validateSurname)}
          />
          <FormErrorMessage>{errors.surname?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            {...register('email', validateEmail)}
            id="email"
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
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel>Repite Password</FormLabel>
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Repite password"
              {...register('repitePassword', validateRepitePassword)}
              id="repitePassword"
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
          <FormErrorMessage>{errors.repitePassword?.message}</FormErrorMessage>
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="yellow">
            Create
          </Button>
          <Button type="reset" colorScheme="red">
            Cancel
          </Button>
          <Button as={NavLink} to="/" variant="outline" colorScheme="black">
            HOME
          </Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Register
