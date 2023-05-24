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
// import { Context } from '../../components/UserContext/UserContext'

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
  // FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'
// import { useForm } from '../../hooks/useForm'
// import { NavLink } from 'react-router-dom'
import logo from 'assets/favicon.png'
import { useForm } from 'react-hook-form'
// import {
//   validateEmail,
//   validateName,
//   validateTable,
//   validateSurname,
// } from '../../utils/validation'
import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  const { emptyOrder } = useContext(OrderContext)
  const {
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm()
  return (
    <Center
      onSubmit={handleSubmit(emptyOrder)}
      paddingTop={5}
      as="form"
      gap="4"
      flexDirection="column"
      minHeight="100vh"
      bg="black"
      color="yellow.400"
    >
      <VStack>
        <Heading>Finish order and pay</Heading>
        <FormControl
        // isInvalid={errors.name}
        >
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            // {...register('name', validateName)}
          />
          {/* <FormErrorMessage>{errors.name?.message}</FormErrorMessage> */}
        </FormControl>
        <FormControl
        // isInvalid={errors.surname}
        >
          <FormLabel>Surname</FormLabel>
          <Input
            id="surname"
            placeholder="Surname"
            // {...register('surname', validateSurname)}
          />
          {/* <FormErrorMessage>{errors.surname?.message}</FormErrorMessage> */}
        </FormControl>
        <FormControl
        // isInvalid={errors.email}
        >
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            // {...register('email', validateEmail)}
            id="email"
            placeholder="Email"
          />
          {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
        </FormControl>
        <FormControl
        // isInvalid={errors.table}
        >
          <FormLabel>Table N°</FormLabel>
          <Input
            type="number"
            // {...register('table', validateTable)}
            id="table"
            placeholder="Table N°"
          />
          {/* <FormErrorMessage>{errors.table?.message}</FormErrorMessage> */}
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="green">
            Pay order total: $
          </Button>
          <Button as={Link} to="/" colorScheme="red">
            Cancel
          </Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default CheckOut
