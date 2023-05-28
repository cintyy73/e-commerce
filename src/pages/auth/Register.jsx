import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
// import { useForm } from '../../hooks/useForm'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from 'assets/favicon.png'
import { useContext, useState } from 'react'
import { UserContext } from 'context/UserContext'
import { useForm } from 'react-hook-form'
import {
  validateEmail,
  validateName,
  validatePassword,
  validateSurname,
} from '../../utils/validation'

const Register = () => {
  const navigate = useNavigate()

  const [isRegister, setIsRegister] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { registerUser } = useContext(UserContext)
  const onSubmitRegister = (data) => {
    try {
      registerUser(data)
      setIsRegister(true)
      navigate('/login')
    } catch (error) {
      setIsRegister(false)

      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
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

      {!isRegister && (
        <Text>Please you must create an account to continue!</Text>
      )}
      <>
        {isRegister && (
          <>
            <Text>cuenta creada correctamente ir a</Text>
            <Link to="/">home</Link>
          </>
        )}

        {!isRegister && (
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
              <Input
                type="password"
                id="password"
                placeholder="Password"
                {...register('password', validatePassword)}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <ButtonGroup>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="yellow"
              >
                Create
              </Button>
              <Button as={NavLink} to="/" colorScheme="red">
                Cancel
              </Button>
            </ButtonGroup>
          </VStack>
        )}
      </>
    </Center>
  )
}

export default Register
