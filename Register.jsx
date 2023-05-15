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
import { useForm } from '../../hooks/useForm'

const Register = () => {
  const { values, register, handleChange } = useForm({
    name: '',
    surname: '',
    email: '',
    password: '',
  })
  console.log(values)
  return (
    <Center
      onSubmit={register}
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
          <Input
            onChange={handleChange}
            value={values.name}
            name="name"
            placeholder="Name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Surname</FormLabel>
          <Input
            onChange={handleChange}
            value={values.surname}
            name="surname"
            placeholder="Surname"
          />
        </FormControl>
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
            onChange={handleChange}
            value={values.password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="yellow">
            Create
          </Button>
          <Button colorScheme="red">Go out</Button>
        </ButtonGroup>
      </VStack>
    </Center>
  )
}

export default Register
