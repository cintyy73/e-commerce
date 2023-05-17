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
import { useContext } from 'react'
import { UserContext } from '../../components/UserContext/UserContext'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const { loginUser } = useContext(UserContext)

  const onSubmit = (data) => {
    loginUser(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <Text>Please you must create an account to continue!</Text>
        <VStack>
          <FormControl isInvalid={true} isRequired>
            <FormLabel>E-mail</FormLabel>
            <Input id="email" {...register('email')} placeholder="Email" />
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password')}
              id="password"
              placeholder="Password"
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
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
    </form>
  )
}

export default Login
