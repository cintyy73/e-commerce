import { HamburgerIcon, StarIcon } from '@chakra-ui/icons'
import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'

const Nav = () => {
  const { menu } = useMenu()
  console.log('2soymenu')
  console.log(menu)

  return (
    <GridItem pl="2" bg="black" color="yellow.300" area={'nav'}>
      <List padding={6} spacing={6}>
        <ListItem>
          <Button to="/menu" as={NavLink} colorScheme="yellow">
            <ListIcon color="gray" as={HamburgerIcon} /> Menu
          </Button>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel>Search Country</FormLabel>
            <Input
              // onChange={handleChange}
              // value={values.name}
              name="searchCity"
            />
          </FormControl>
        </ListItem>

        <ListItem>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              // onChange={handleChange}
              // value={values.name}
              name="min"
              placeholder="Min"
            />

            <Input
              type="number"
              // onChange={handleChange}
              // value={values.name}
              name="max"
              placeholder="Max"
            />
          </FormControl>
        </ListItem>
        <List>
          <Heading as={NavLink} to="/recommended" size="md">
            Recommended
          </Heading>

          {menu.map(
            (city) =>
              city.recommended && (
                <ListItem key={city.id} city={city}>
                  <ListIcon color="gray" as={StarIcon} />
                  <NavLink> {city.name}</NavLink>
                </ListItem>
              )
          )}
        </List>
      </List>
    </GridItem>
  )
}

export default Nav
