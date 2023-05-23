import {
  Heading,
  List,
  ListItem,
  HStack,
  Text,
  GridItem,
  Grid,
  Button,
  Divider,
  Spinner,
  useToast,
  // useToast,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
// import { useContext, useState } from 'react'
// import { OrderContext } from './OrderContext/OrderContext'

const Menu = () => {
  const toast = useToast()

  const { menu, loading } = useMenu()
  const { createOrder, isAdd } = useContext(OrderContext)
  return (
    <HStack
      color="yellow.200"
      bg="black"
      flexDir="column"
      gap={4}
      padding={5}
      minHeight="100vh"
    >
      <Heading fontSize={40}>Menu</Heading>
      {loading && <Spinner color="yellow" size="xl" />}
      {!loading && (
        <>
          <Grid
            templateColumns={{
              base: 'repeat( 2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={20}
          >
            {menu.map((city) => (
              <GridItem fontSize={10} key={city.name}>
                <List>
                  (
                  <ListItem>
                    <Heading fontSize={15}>{city.name} </Heading>
                    <Divider />
                    <Heading fontSize={10}>{city.country} </Heading>
                    <Text>Entrance : {city.entrance}</Text>
                    <Text>First : {city.first}</Text>
                    <Text>Dessert: {city.dessert}</Text>
                    <Text textAlign="center" fontSize={30}>
                      ${city.price}
                    </Text>
                  </ListItem>
                  )
                  <Button
                    alignSelf="center"
                    size="sm"
                    colorScheme="yellow"
                    onClick={() => {
                      createOrder(city, city.id, 1)

                      toast({
                        title: isAdd
                          ? 'Added to your order'
                          : 'Cannot be added to your order',
                        description: 'Change quantity in your order',
                        status: isAdd ? 'success' : 'warning',
                        duration: 4000,
                        isClosable: true,
                      })
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    alignSelf="center"
                    as={NavLink}
                    size="sm"
                    to={'/' + city.id}
                    colorScheme="yellow"
                  >
                    Details
                  </Button>
                </List>
              </GridItem>
            ))}
          </Grid>

          <Button
            p={2}
            size="lg"
            fontSize={15}
            as={NavLink}
            to="/"
            colorScheme="yellow"
          >
            Home
          </Button>
        </>
      )}
    </HStack>
  )
}

export default Menu
