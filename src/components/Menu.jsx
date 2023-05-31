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
  ButtonGroup,
} from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'

import Order from './Order'

const Menu = () => {
  const { menu, loading } = useMenu()

  return (
    <HStack
      color="yellow.200"
      bg="black"
      flexDir="column"
      gap={4}
      padding={5}
      minHeight="100vh"
    >
      <HStack w="100%" justifyContent="space-evenly" pb={6}>
        <Heading fontSize={40}>Menu</Heading>
        <ButtonGroup gap={4}>
          <Button
            variant="outline"
            p={2}
            size={{ base: 'xs', md: 'md' }}
            as={NavLink}
            to="/"
            colorScheme="black"
          >
            📌Home
          </Button>
          <Order />
        </ButtonGroup>
      </HStack>
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
            {menu.map(
              ({ name, id, entrance, first, dessert, country, price }) => (
                <GridItem fontSize={10} key={name}>
                  <List>
                    (
                    <ListItem>
                      <Heading fontSize={15}>{name} </Heading>
                      <Divider />
                      <Heading fontSize={10}>{country} </Heading>
                      <Text>Entrance : {entrance}</Text>
                      <Text>First : {first}</Text>
                      <Text>Dessert: {dessert}</Text>
                      <Text textAlign="center" fontSize={30}>
                        ${price}
                      </Text>
                    </ListItem>
                    )
                    <Button
                      alignSelf="center"
                      as={NavLink}
                      size={{ base: 'xs', md: 'md' }}
                      to={'/city/' + id}
                      colorScheme="black"
                      variant={'outline'}
                    >
                      + Details 🍽️
                    </Button>
                  </List>
                </GridItem>
              )
            )}
          </Grid>
        </>
      )}
    </HStack>
  )
}

export default Menu
