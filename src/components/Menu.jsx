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
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <HStack
      color="yellow.200"
      bg="black"
      flexDir="column"
      gap={4}
      paddingTop={20}
      minHeight="100vh"
    >
      <Heading>Menu</Heading>
      <Grid maxWidth="500px" templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <List>
            <ListItem>
              <Heading>mosku</Heading>

              <Text>entrada: kokurm</Text>
              <Text>plato1: kjkkjk</Text>
              <Text>postre: kokurm</Text>
            </ListItem>
          </List>
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <List>
            <ListItem gap={2} alignContent="center">
              <Heading>mosku</Heading>

              <Text>entrada: kokurm</Text>
              <Text>plato1: kjkkjk</Text>
              <Text>postre: kokurm</Text>
              <ButtonGroup>
                <Button size="xs" as={NavLink} to="/" colorScheme="yellow">
                  Go
                </Button>
                <Button size="xs" as={NavLink} to="/" colorScheme="yellow">
                  add
                </Button>
              </ButtonGroup>
            </ListItem>
          </List>
        </GridItem>
      </Grid>
      <Button as={NavLink} to="/" colorScheme="yellow">
        Home
      </Button>
    </HStack>
  )
}

export default Menu
