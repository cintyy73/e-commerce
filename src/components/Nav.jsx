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
import { NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
import { useState } from 'react'

const Nav = () => {
  const { menu } = useMenu()
  const [values, setValues] = useState({
    min: 0,
    max: 0,
    country: '',
  })
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleCountry = (city) =>
    setValues({ ...values, country: city.country })
  // const menuFilter = menu.filter((city) => city.country === values.country)

  return (
    <GridItem pl="2" bg="black" color="yellow.300" area={'nav'}>
      <List padding={6} spacing={6}>
        <ListItem>
          <Button to="/" as={NavLink} colorScheme="yellow">
            HOME
          </Button>
        </ListItem>
        <ListItem>
          <Button to="/cities" as={NavLink} colorScheme="yellow">
            All
          </Button>
        </ListItem>
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
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              onChange={handleChange}
              value={values.name}
              name="min"
              placeholder="100-1000"
            />

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
