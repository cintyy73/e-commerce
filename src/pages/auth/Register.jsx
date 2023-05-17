// import {
//   Avatar,
//   Button,
//   ButtonGroup,
//   Center,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Text,
//   VStack,
// } from '@chakra-ui/react'
// // import { useForm } from '../../hooks/useForm'
// import { NavLink } from 'react-router-dom'
// import { useContext, useState } from 'react'
// import { UserContext } from '../../components/UserContext/UserContext'

// const Register = () => {
//   const [values, setValues] = useState({
//     surname: '',
//     name: '',

//     email: '',
//     password: '',
//   })
//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }
//   const { register } = useContext(UserContext)
//   const onSubmit = (e) => {
//     e.preventDefault()
//     register(values)
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
//           <FormLabel>Name</FormLabel>
//           <Input
//             onChange={handleChange}
//             value={values.name}
//             name="name"
//             placeholder="Name"
//           />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Surname</FormLabel>
//           <Input
//             onChange={handleChange}
//             value={values.surname}
//             name="surname"
//             placeholder="Surname"
//           />
//         </FormControl>
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
//             onChange={handleChange}
//             value={values.password}
//             type="password"
//             name="password"
//             placeholder="Password"
//           />
//         </FormControl>
//         <ButtonGroup>
//           <Button type="submit" colorScheme="yellow">
//             Create
//           </Button>
//           <Button as={NavLink} to="/" colorScheme="red">
//             Cancel
//           </Button>
//         </ButtonGroup>
//       </VStack>
//     </Center>
//   )
// }

// export default Register
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++
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
// import { useForm } from '../../hooks/useForm'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../components/UserContext/UserContext'
import { useForm } from 'react-hook-form'

const Register = () => {
  // const [values, setValues] = useState({
  //   surname: '',
  //   name: '',

  //   email: '',
  //   password: '',
  // })
  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value })
  // }
  const { register, handleSubmit } = useForm()

  const { registerUser } = useContext(UserContext)
  const onSubmit = (data) => {
    registerUser(data)
    console.log(data)
  }
  return (
    <Center
      onSubmit={handleSubmit(onSubmit)}
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
          <Input id="name" placeholder="Name" {...register('name')} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Surname</FormLabel>
          <Input id="surname" placeholder="Surname" {...register('Surname')} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            {...register('email')}
            id="email"
            placeholder="Email"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="yellow">
            Create
          </Button>
          <Button as={NavLink} to="/" colorScheme="red">
            Cancel
          </Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Register
