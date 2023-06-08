import {
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { getOrders } from '../../../services/completeOrder'
import { UserContext } from '../../../context/UserContext'

const MyOrders = () => {
  const { user } = useContext(UserContext)
  const { uid } = user
  const uidUser = uid
  const [ordersUser, setOrdersUser] = useState([])
  useEffect(() => {
    const getData = async () => {
      const ordersList = await getOrders()
      let list = []
      list = ordersList.filter(({ user }) => user.uid === uidUser)
      setOrdersUser(list)
    }
    getData()
  }, [uidUser])

  return (
    <SimpleGrid
      alignItems=""
      spacing={4}
      templateColumns={{
        base: 'repeat(1, minmax(300px, 1fr))',
        md: 'repeat(2, minmax(300px, 1fr))',
      }}
    >
      <Heading p={5} color="yellow.200">
        My orders 📋
      </Heading>
      <Divider mb={4} />
      {!ordersUser && (
        <Heading p={5} color="yellow.200">
          You dont have orders yet
        </Heading>
      )}
      {ordersUser.map(({ order, table, total, complete, user } = order) => {
        return (
          <GridItem key={table + total} bg="black" color="yellow.100">
            <Stack border="1px solid green" p={4} maxWidth="max-content">
              <Text>Order </Text>

              <Divider />
              <Text>Name: {user.name} </Text>
              <Text>Surname: {user.surname} </Text>
              <Divider />

              <Text color={complete ? 'green' : 'red'}>
                {complete ? 'Delivered' : 'Undelivered'}
              </Text>
              <Text>E-mail: {user.email}</Text>
              <Text>Table N° {table}</Text>
              <Divider />
              {order.map(({ name, price, quantity, id } = order) => (
                <Stack key={id}>
                  <Text>
                    {name} x {quantity} = ${price * quantity}
                  </Text>
                </Stack>
              ))}
              <Text>Total : ${total}</Text>
            </Stack>
          </GridItem>
        )
      })}
    </SimpleGrid>
  )
}
export default MyOrders
