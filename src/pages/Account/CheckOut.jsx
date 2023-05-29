import {
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
import { useForm } from 'react-hook-form'
// import {
//   validateEmail,
//   validateName,
//   validateTable,
//   validateSurname,
// } from '../../utils/validation'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import OrderInProgress from './OrderInProgress'
import { completeOrder } from '../../services/completeOrder'

const CheckOut = () => {
  const { payOrder, order } = useContext(OrderContext)
  const { user } = useContext(UserContext)
  const { email, uid } = user

  const {
    // register,
    handleSubmit,
    formState: { isSubmiting }, //errors,
  } = useForm()
  return (
    <Center
      onSubmit={handleSubmit(payOrder)}
      paddingTop={5}
      as="form"
      gap="4"
      flexDirection="column"
      minHeight="100vh"
      bg="black"
      color="yellow.400"
    >
      <VStack>
        <OrderInProgress />
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
            defaultValue={user?.email}
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
          <Button
            onClick={() => completeOrder(order, email, uid)}
            type="submit"
            isLoading={isSubmiting}
            colorScheme="green"
          >
            {/* Pay order total: ${total} */}
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
