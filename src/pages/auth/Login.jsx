// import {
//   Center,
//   FormControl,
//   FormLabel,
//   VStack,
//   Input,
//   Heading,
//   Text,
//   ButtonGroup,
//   Button,
//   Avatar,
// } from '@chakra-ui/react'
// import { NavLink } from 'react-router-dom'
// import { useContext, useState } from 'react'
// import { UserContext } from '../../components/UserContext/UserContext'

// const Login = () => {
//   const [values, setValues] = useState({ email: '', password: '' })
//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }
//   const { login } = useContext(UserContext)

//   const onSubmit = (e) => {
//     e.preventDefault()
//     login(values)
//   }

//   return (
//     <Center
//       onSubmit={onSubmit}
//       paddingTop={5}
//       as="form"
//       gap="4"
//       flexDirection="column"
//       minHeight="100vh"
//       bg="black"
//       color="yellow.400"
//     >
//       <Heading>Welcome to Arian</Heading>
//       <Avatar size="2xl" name="logo resto" src="./src/assets/favicon.png" />

//       <Text>Please you must create an account to continue!</Text>
//       <VStack>
//         <FormControl isRequired>
//           <FormLabel>E-mail</FormLabel>
//           <Input
//             onChange={handleChange}
//             value={values.email}
//             name="email"
//             placeholder="Email"
//           />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             onChange={handleChange}
//             value={values.password}
//             name="password"
//             placeholder="Password"
//           />
//         </FormControl>
//         <ButtonGroup>
//           <Button type="submit" colorScheme="yellow">
//             Login
//           </Button>
//           <Button as={NavLink} to="/" colorScheme="red">
//             Cancel
//           </Button>
//         </ButtonGroup>
//       </VStack>
//     </Center>
//   )
// }

// export default Login
// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
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
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../components/UserContext/UserContext'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePassword } from '../../utils/validation'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log(errors)
  const { loginUser, isLogin } = useContext(UserContext)
  const [isError, setIsError] = useState(false)

  const onSubmitlogin = async (data) => {
    try {
      await loginUser(data)
      console.log(isLogin)
      setIsError(true)
      console.log(isError)
    } catch (error) {
      setIsError(true)
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
      console.log(isError)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmitlogin)}>
      {isLogin && <Text>usuario logueado //redirigir a home</Text>}
      {!isLogin && (
        <Center
          paddingTop={5}
          gap="4"
          flexDirection="column"
          minHeight="100vh"
          bg="black"
          color="yellow.400"
        >
          <Heading>Welcome to Arian</Heading>
          <Avatar size="2xl" name="logo resto" src="./src/assets/favicon.png" />

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
      )}
    </form>
  )
}

export default Login
