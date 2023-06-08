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
  VStack,
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
        <Heading fontSize={{ base: '2xl', md: '4xl' }}>Menu</Heading>
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
            gap={5}
          >
            {menu.map(
              ({ name, id, entrance, first, dessert, country, price }) => (
                <GridItem fontSize="md" marginBottom={5} key={name}>
                  <List>
                    <ListItem>
                      <VStack
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                        gap={1}
                      >
                        <Heading fontSize="xl">{name} </Heading>
                        <Divider />
                        <Heading fontSize="xl">{country} </Heading>
                        <VStack
                          justifyContent={{
                            base: 'space-around',
                            md: 'center',
                          }}
                          height={{ base: '250px', md: '150px' }}
                          p={2}
                        >
                          <Text>Entrance : {entrance}</Text>
                          <Text>Main dish : {first}</Text>
                          <Text>Dessert: {dessert}</Text>
                        </VStack>
                        <Text fontSize={30}>${price}</Text>
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
                      </VStack>
                    </ListItem>
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
