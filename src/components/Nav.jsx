import {
  CheckCircleIcon,
  ChevronDownIcon,
  SearchIcon,
  StarIcon,
} from '@chakra-ui/icons'

import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
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
import { useFilters } from '../hooks/useFilters'

const Nav = () => {
  const { menu } = useMenu()
  const { values, handleChange, handleCountry } = useFilters()

  return (
    <GridItem pl="2" bg="black" color="yellow.300" area={'nav'}>
      <List padding={6} spacing={6}>
        <ListItem>
          <Button to="/" as={NavLink} colorScheme="yellow">
            📌 HOME
          </Button>
        </ListItem>

        <ListItem>
          <Button to="/menu" as={NavLink} colorScheme="yellow">
            🗒️ MENU
          </Button>
        </ListItem>
        <ListItem>
          <ListItem to="/cities" as={Link}>
            <ListIcon color="gray" as={CheckCircleIcon} /> All Cities
          </ListItem>
          <List>
            <ListItem as={Link} to="/recommended" size="md">
              <ListIcon color="gray" as={CheckCircleIcon} />
              All Recommended
            </ListItem>

            {menu.map(
              (city) =>
                city.recommended && (
                  <ListItem key={city.id} city={city}>
                    <ListIcon color="gray" as={StarIcon} />
                    <NavLink to={'/city/' + city.id}> {city.name}</NavLink>
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
              {menu.map(
                (city) =>
                  city.recommended && (
                    <MenuItem
                      background="black"
                      key={city.country + city.id}
                      city={city}
                      onClick={() => handleCountry(city)}
                    >
                      {city.country}
                    </MenuItem>
                  )
              )}
            </MenuList>
          </Menu>
        </ListItem>

        <ListItem>
          <FormControl>
            <FormLabel>$ Price minim</FormLabel>
            <Input
              type="number"
              onChange={handleChange}
              value={values.name}
              name="min"
              placeholder="100-1000"
            />
            <FormLabel>$ Price maxim</FormLabel>

            <Input
              type="number"
              onChange={handleChange}
              value={values.name}
              name="max"
              placeholder="100-1000"
            />
          </FormControl>
        </ListItem>
      </List>
    </GridItem>
  )
}

export default Nav
