import {
  ChevronDownIcon,
  SearchIcon,
  StarIcon,
  ViewIcon,
} from '@chakra-ui/icons'
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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
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
            <ViewIcon /> Menu
          </Button>
        </ListItem>
        <ListItem>
          <List>
            <Heading as={NavLink} to="/recommended" size="md">
              Recommended
            </Heading>

            {menu.map(
              (city) =>
                city.recommended && (
                  <ListItem key={city.id} city={city}>
                    <ListIcon color="gray" as={StarIcon} />
                    <NavLink to={'/' + city.id}> {city.name}</NavLink>
                  </ListItem>
                )
            )}
          </List>
        </ListItem>
        <ListItem>
          <Menu>
            <MenuButton
              colorScheme="yellow"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              size="sm"
            >
              <SearchIcon /> Country
            </MenuButton>
            <MenuList background="black">
              <MenuItem background="black" as={Link} to="/order">
                Argentina
              </MenuItem>
              <MenuItem background="black" as={Link} to="/order">
                Peru
              </MenuItem>
              <MenuItem background="black" as={Link} to="/order">
                Russia
              </MenuItem>
              <MenuItem background="black">Spain</MenuItem>
            </MenuList>
          </Menu>
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
      </List>
    </GridItem>
  )
}

export default Nav
