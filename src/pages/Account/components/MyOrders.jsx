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
  console.log(uidUser)
  const [ordersUser, setOrdersUser] = useState([])
  useEffect(() => {
    const getData = async () => {
      const ordersList = await getOrders()
      let list = []
      list = ordersList.filter((order) => order.user.uid === uidUser)
      setOrdersUser(list)
    }
    getData()
  }, [uidUser])
  console.log(ordersUser)
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
      {ordersUser.map(({ order, table, total } = order) => (
        <GridItem key={order.id} bg="black" color="yellow.100">
          <Stack border="1px solid green" p={4} maxWidth="max-content">
            <Text>Order </Text>
            <Divider />
            <Text>Complete: {order.complete ? 'Yes' : 'No'}</Text>
            <Text>E-mail: {user.email}</Text>
            <Text>Table: {table}</Text>

            <Text>Total: {total}</Text>
          </Stack>
        </GridItem>
      ))}
    </SimpleGrid>
  )
}
export default MyOrders
