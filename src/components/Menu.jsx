import {
  Heading,
  List,
  ListItem,
  HStack,
  Text,
  GridItem,
  Grid,
  Button,
  ButtonGroup,
  Divider,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
// import { useContext, useState } from 'react'
// import { OrderContext } from './OrderContext/OrderContext'

const Menu = () => {
  const { menu } = useMenu()

  return (
    <HStack
      color="yellow.200"
      bg="black"
      flexDir="column"
      gap={4}
      paddingTop={20}
      minHeight="100vh"
    >
      <Heading fontSize={50}>Menu</Heading>
      <Grid
        templateColumns={{
          base: 'repeat( 1fr)',
          md: 'repeat( 2,1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={20}
      >
        {menu.map((city) => (
          <GridItem fontSize={20} key={city.name}>
            <List>
              <ListItem>
                <Heading fontSize={30}>{city.name} </Heading>

                <Divider />
                <Heading fontSize={20}>{city.country} </Heading>
                <Text>Entrance : {city.entrance}</Text>
                <Text>First : {city.first}</Text>
                <Text>Dessert: {city.dessert}</Text>
                <Text textAlign="center" fontSize={30}>
                  ${city.price}
                </Text>
              </ListItem>
              <ButtonGroup justifyContent="center">
                <Button as={NavLink} to="/cityDetails" colorScheme="yellow">
                  Details
                </Button>
              </ButtonGroup>
            </List>
          </GridItem>
        ))}
      </Grid>

      <Button
        m={10}
        p={10}
        size="lg"
        fontSize={30}
        as={NavLink}
        to="/"
        colorScheme="yellow"
      >
        Home
      </Button>
    </HStack>
  )
}

export default Menu
