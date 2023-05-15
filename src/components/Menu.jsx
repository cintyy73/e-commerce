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

const Menu = () => {
  const { menu } = useMenu()
  // const { entrance, first, dessert, price } = menu
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
        {menu.map(({ name, entrance, price, country, first, dessert }) => (
          <GridItem fontSize={20} key={name}>
            <List>
              <ListItem>
                <Heading fontSize={30}>{name} </Heading>

                <Divider />
                <Heading fontSize={20}>{country} </Heading>
                <Text>Entrance : {entrance}</Text>
                <Text>First : {first}</Text>
                <Text>Dessert: {dessert}</Text>
                <Text textAlign="center" fontSize={30}>
                  ${price}
                </Text>
              </ListItem>
              <ButtonGroup justifyContent="center">
                <Button as={NavLink} to="/" colorScheme="yellow">
                  Details
                </Button>

                <Button colorScheme="yellow">Add</Button>
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
