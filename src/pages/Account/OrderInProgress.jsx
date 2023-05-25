import {
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

const OrderInProgress = () => {
  const { order } = useContext(OrderContext)
  let total = 0

  return (
    <Stack color="yellow.100" bg="black">
      <Heading fontSize={20}>Order in progress</Heading>
      <SimpleGrid
        minW={{ base: '300px', md: '600px', lg: '800px', xl: '1200' }}
        p={6}
      >
        <GridItem>
          <HStack>
            <Text fontSize={15} w="100%">
              City
            </Text>
            <Text fontSize={15} textAlign="center" w="100%">
              Quantity
            </Text>
            <Text fontSize={15} textAlign="center" w="100%">
              Price
            </Text>
            <Text fontSize={15} textAlign="center" w="100%">
              Total x city{' '}
            </Text>
          </HStack>
          <Divider />
        </GridItem>
        {order?.map(({ id, name, price, quantity }) => {
          const totalXunit = price * quantity
          total += totalXunit
          return (
            <GridItem key={id}>
              <HStack>
                <Text w="100%">{name}</Text>
                <Text textAlign="center" w="100%">
                  {quantity}
                </Text>
                <Text textAlign="center" w="100%">
                  {price}
                </Text>
                <Text textAlign="center" w="100%">
                  {totalXunit}
                </Text>
              </HStack>
              <Divider></Divider>
            </GridItem>
          )
        })}
        <GridItem>
          <HStack>
            <Text w="100%"></Text>
            <Text fontSize={15} w="100%"></Text>
            <Text fontSize={15} textAlign="center" w="100%">
              TOTAL
            </Text>
            <Text textAlign="center" w="100%">
              $ {total}
            </Text>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  )
}

export default OrderInProgress
