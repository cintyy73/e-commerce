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

const Nav = () => {
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
            <FormLabel>Search City</FormLabel>
            <Input
              // onChange={handleChange}
              // value={values.name}
              name="searchCity"
              placeholder="Search City"
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
        <Heading size="md">Recommended</Heading>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Lima</NavLink>
        </ListItem>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Machu Pichu</NavLink>
        </ListItem>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Moscu</NavLink>
        </ListItem>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Buenos Aires</NavLink>
        </ListItem>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Mar del Plata</NavLink>
        </ListItem>
        <ListItem>
          <ListIcon color="gray" as={StarIcon} />
          <NavLink> Paris</NavLink>
        </ListItem>
      </List>
    </GridItem>
  )
}

export default Nav
