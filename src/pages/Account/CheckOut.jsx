import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  // Portal,
  VStack,
  useToast,
} from '@chakra-ui/react'
// import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  validateEmail,
  validateName,
  validateTable,
  validateSurname,
} from '../../utils/validation'
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
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmiting, errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { name, surname, table } = data
      const orderData = {
        name,
        surname,
        table,
        email,
        uid,
        order,
      }
      completeOrder(orderData)
      payOrder()
      toast({
        title: 'Payment made successfully!',
        description: 'In 15 minutes you will receive your order at table ',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error creating order',
        description: 'Please check the data entered and try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <VStack
      onSubmit={handleSubmit(onSubmit)}
      paddingTop={5}
      as="form"
      justifyContent="space-evenly"
      gap="4"
      flexDirection="column"
      minHeight="100vh"
      bg="black"
      color="yellow.400"
    >
      <OrderInProgress />
      <VStack border="solid 3px green" padding={10} gap={3}>
        <Heading>Finish order and pay</Heading>
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
            defaultValue={user?.email}
            {...register('email', validateEmail)}
            id="email"
            placeholder="Email"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.table}>
          <FormLabel>Table N°</FormLabel>
          <Input
            type="number"
            {...register('table', validateTable)}
            id="table"
            placeholder="Table N° 1 - 25"
          />
          <FormErrorMessage>{errors.table?.message}</FormErrorMessage>
        </FormControl>
        <ButtonGroup>
          <Popover>
            <PopoverTrigger>
              <Button type="button" colorScheme="green">
                Pay
              </Button>
            </PopoverTrigger>
            {/* <Portal> */}
            <PopoverContent bg="black" color="yellow.100">
              <PopoverArrow />
              <PopoverHeader>Finish order and pay</PopoverHeader>
              <Button isLoading={isSubmiting} type="submit" colorScheme="green">
                OK
              </Button>
              <PopoverCloseButton />
            </PopoverContent>
            {/* </Portal> */}
          </Popover>
          <Button as={Link} to="/" colorScheme="red">
            Cancel
          </Button>
        </ButtonGroup>
      </VStack>
    </VStack>
  )
}

export default CheckOut
