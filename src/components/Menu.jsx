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
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
// import { useContext, useState } from 'react'
// import { OrderContext } from './OrderContext/OrderContext'

const Menu = () => {
  const { menu, loading } = useMenu()

  return (
    <HStack
      color="yellow.200"
      bg="black"
      flexDir="column"
      gap={4}
      paddingTop={5}
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
                    as={NavLink}
                    size="sm"
                    to="/cityDetails"
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
